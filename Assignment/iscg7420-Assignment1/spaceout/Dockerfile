# Base image
FROM python:3.9

# For ECS Logs
ENV PYTHONBUFFERED 1

# Work directory for the container
WORKDIR '/app'

# Copy requirements.txt into 'app' directory
COPY ./requirements.txt ./

# Update, upgrade and install all requirements files
RUN apt-get update -y \ 
    && apt-get upgrade -y \
    && pip install -r requirements.txt

# Copy the remaining files to 'app' directory
COPY ./ ./

# Collect static files
RUN python manage.py collectstatic --noinput

# Port intended to be exposed to the outside world and Docker conatiners
EXPOSE 8000

# Make docker-entrypoint.sh to be executable
RUN chmod +x ./docker-entrypoint.sh

# Container starts, EntryPoint tells the container to run a shell script
ENTRYPOINT ["sh"]

# Default argument provided to EntryPoint
CMD ["docker-entrypoint.sh"]

# Override default command
# CMD ["gunicorn", "--bind", ":8000", "--workers", "3", "spaceout.wsgi:application"]


