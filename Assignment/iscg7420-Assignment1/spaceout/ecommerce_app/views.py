from django.contrib.auth import login, authenticate, logout
from django.db import IntegrityError
from django.shortcuts import render, redirect, get_object_or_404
from .forms import CustomAdminForm, CustomerSignUpForm, SpaceObjectForm, CategoryForm, DiscountForm
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.views.generic import CreateView
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
