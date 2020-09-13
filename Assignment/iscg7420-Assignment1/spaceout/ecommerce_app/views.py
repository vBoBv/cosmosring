from django.conf import settings
from django.contrib.auth import login, authenticate, logout, REDIRECT_FIELD_NAME, update_session_auth_hash
from django.contrib.auth.decorators import login_required
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.views import SuccessURLAllowedHostsMixin, PasswordContextMixin
from django.db import IntegrityError
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect, get_object_or_404, resolve_url
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.utils.http import url_has_allowed_host_and_scheme
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.debug import sensitive_post_parameters

from .forms import CustomAdminForm, CustomerSignUpForm, SpaceObjectForm, CategoryForm
from django.contrib.auth.forms import AuthenticationForm, PasswordChangeForm, PasswordResetForm
from django.views.generic import CreateView, FormView, TemplateView
from .models import User, Product, Category, Discount
from django.forms import modelformset_factory


def home(request):
    return render(request, 'ecommerce_app/home.html')


def createspaceobject(request):
    if request.method == 'GET':
        return render(request, 'ecommerce_app/createspaceobject.html', {'form': SpaceObjectForm()})
    else:
        try:
            form = SpaceObjectForm(request.POST)
            form.save()
            return redirect('spaceobjects')
        except ValueError:
            return render(request, 'ecommerce_app/createspaceobject.html',
                          {'form': SpaceObjectForm(), 'error': 'An error has occured. Please retry.'})


def spaceobjects(request):
    spaceobjects = Product.objects.all();
    return render(request, 'ecommerce_app/spaceobjects.html', {'spaceobjects': spaceobjects})


def viewspaceobject(request, spaceobject_id):
    spaceobject = get_object_or_404(Product, pk=spaceobject_id)
    return render(request, 'ecommerce_app/spaceobject.html', {'spaceobject': spaceobject})


def createcategory(request):
    if request.method == 'GET':
        return render(request, 'ecommerce_app/createcategory.html', {'form': CategoryForm()})
    else:
        try:
            form = CategoryForm(request.POST)
            form.save()
            return redirect('categories')
        except ValueError:
            return render(request, 'ecommerce_app/createcategory.html',
                          {'form': CategoryForm(), 'error': 'An error has occured. Please retry.'})


def categories(request):
    categories = Category.objects.all()
    return render(request, 'ecommerce_app/categories.html', {'categories': categories})


def viewcategory(request, category_id):
    spaceobjects = Product.objects.filter(category=category_id)
    return render(request, 'ecommerce_app/category.html', {'spaceobjects': spaceobjects})


def creatediscount(request):
    DiscountFormSet = modelformset_factory(Discount, fields=('discount_code',))
    if request.method == 'GET':
        return render(request, 'ecommerce_app/creatediscount.html', {'form': DiscountFormSet()})
    else:
        try:
            form = DiscountFormSet(request.POST)
            form.save()
            return redirect('discounts')
        except ValueError:
            return render(request, 'ecommerce_app/creatediscount.html',
                          {'form': DiscountFormSet(), 'error': 'An error has occured. Please retry.'})


def discounts(request):
    discounts = Discount.objects.all()
    return render(request, 'ecommerce_app/discounts.html', {'discounts': discounts})


def adminsignup(request):
    if request.method == 'GET':
        return render(request, 'ecommerce_app/adminsignup.html', {'form': CustomAdminForm()})
    else:
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.create_superuser(request.POST['email'], request.POST['username'], password=request.POST['password1'])
                user.save()
                login(request, user)
                return redirect('home')
            except IntegrityError:
                return render(request, 'ecommerce_app/adminsignup.html', {'form': CustomAdminForm()})
        else:
            return render(request, 'ecommerce_app/adminsignup.html',
                          {'form': CustomAdminForm(), 'error': 'Passwords did not match'})


def adminsignin(request):
    if request.method == 'GET':
        return render(request, 'ecommerce_app/adminsignin.html', {'form': AuthenticationForm()})
    else:
        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])
        if user is None:
            return render(request, 'ecommerce_app/adminsignin.html', {'form': AuthenticationForm(), 'error': 'Incorrect email or password!'})
        else:
            login(request, user)
            return redirect('home')


def adminlogout(request):
    if request.method == 'POST':
        logout(request)
    return redirect('home')


# Authentication
class LoginView(SuccessURLAllowedHostsMixin, FormView):
    """
    Display the login form and handle the login action.
    """
    form_class = AuthenticationForm
    authentication_form = None
    redirect_field_name = REDIRECT_FIELD_NAME
    template_name = 'ecommerce_app/login.html'
    redirect_authenticated_user = False
    extra_context = None

    def get_success_url(self):
        url = self.get_redirect_url()
        return url or resolve_url("spaceobjects")

    def get_redirect_url(self):
        """Return the user-originating redirect URL if it's safe."""
        redirect_to = self.request.POST.get(
            self.redirect_field_name,
            self.request.GET.get(self.redirect_field_name, '')
        )
        url_is_safe = url_has_allowed_host_and_scheme(
            url=redirect_to,
            allowed_hosts=self.get_success_url_allowed_hosts(),
            require_https=self.request.is_secure(),
        )
        return redirect_to if url_is_safe else ''

    def form_valid(self, form):
        """Security check complete. Log the user in."""
        login(self.request, form.get_user())
        return HttpResponseRedirect(self.get_success_url())


class LogoutView(SuccessURLAllowedHostsMixin, TemplateView):
    """
    Log out the user and display the 'You are logged out' message.
    """
    next_page = None
    redirect_field_name = REDIRECT_FIELD_NAME
    template_name = 'ecommerce_app/logged_out.html'
    extra_context = None

    @method_decorator(never_cache)
    def dispatch(self, request, *args, **kwargs):
        logout(request)
        next_page = self.get_next_page()
        if next_page:
            # Redirect to this page until the session has been cleared.
            return HttpResponseRedirect(next_page)
        return super().dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        """Logout may be done via POST."""
        return self.get(request, *args, **kwargs)

    def get_next_page(self):
        if self.next_page is not None:
            next_page = resolve_url(self.next_page)
        elif settings.LOGOUT_REDIRECT_URL:
            next_page = resolve_url(settings.LOGOUT_REDIRECT_URL)
        else:
            next_page = self.next_page

        if (self.redirect_field_name in self.request.POST or
                self.redirect_field_name in self.request.GET):
            next_page = self.request.POST.get(
                self.redirect_field_name,
                self.request.GET.get(self.redirect_field_name)
            )
            url_is_safe = url_has_allowed_host_and_scheme(
                url=next_page,
                allowed_hosts=self.get_success_url_allowed_hosts(),
                require_https=self.request.is_secure(),
            )
            # Security check -- Ensure the user-originating redirection URL is
            # safe.
            if not url_is_safe:
                next_page = self.request.path
        return next_page


class PasswordChangeView(PasswordContextMixin, FormView):
    form_class = PasswordChangeForm
    success_url = reverse_lazy('password_change_done')
    template_name = 'ecommerce_app/password_change_form.html'
    title = ('Password change')

    @method_decorator(sensitive_post_parameters())
    @method_decorator(csrf_protect)
    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs['user'] = self.request.user
        return kwargs

    def form_valid(self, form):
        form.save()
        # Updating the password logs out all other sessions for the user
        # except the current one.
        update_session_auth_hash(self.request, form.user)
        return super().form_valid(form)


class PasswordChangeDoneView(PasswordContextMixin, TemplateView):
    template_name = 'ecommerce_app/password_change_done.html'
    title = ('Password change successful')

    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)


class PasswordResetView(PasswordContextMixin, FormView):
    email_template_name = 'registration/password_reset_form.html'
    extra_email_context = None
    form_class = PasswordResetForm
    from_email = None
    html_email_template_name = None
    subject_template_name = 'registration/password_reset_subject.txt'
    success_url = reverse_lazy('password_reset_done')
    template_name = 'ecommerce_app/password_reset_form.html'
    title = ('Password reset')
    token_generator = default_token_generator

    @method_decorator(csrf_protect)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def form_valid(self, form):
        opts = {
            'use_https': self.request.is_secure(),
            'token_generator': self.token_generator,
            'from_email': self.from_email,
            'email_template_name': self.email_template_name,
            'subject_template_name': self.subject_template_name,
            'request': self.request,
            'html_email_template_name': self.html_email_template_name,
            'extra_email_context': self.extra_email_context,
        }
        form.save(**opts)
        return super().form_valid(form)


INTERNAL_RESET_SESSION_TOKEN = '_password_reset_token'


class PasswordResetDoneView(PasswordContextMixin, TemplateView):
    template_name = 'ecommerce_app/password_reset_done.html'
    title = ('Password reset sent')


# TODO
class CustomerSignUpView(CreateView):
    model = User
    form_class = CustomerSignUpForm
    template_name = 'ecommerce_app/signup.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'customer'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        print(user)
        # login(self.request, user)
        return redirect('home')

    # def form_valid(self, form):
    #     print(form.cleaned_data)
    #     return super().form_valid(form)
    #
    # def get_success_url(self):
    #     return '/'


# def signup_customer(request):
#     return render(request, 'ecommerce_app/signup.html', {"form": CustomerSignUpForm()})


# def signup_ordermanager(request):
#     return render(request, 'ecommerce_app/signup.html', {"form": CustomerSignUpForm()})

def signin(request):
    return render(request, 'ecommerce_app/signin.html', {"form": AuthenticationForm()})


def resetpassword(request):
    return render(request, 'ecommerce_app/resetpassword.html')


def checkout(request):
    return render(request, 'ecommerce_app/checkout.html')


def bid(request):
    return render(request, 'ecommerce_app/bid.html')


def trade(request):
    return render(request, 'ecommerce_app/trade.html')


def ordersummary(request):
    return render(request, 'ecommerce_app/ordersummary.html')
