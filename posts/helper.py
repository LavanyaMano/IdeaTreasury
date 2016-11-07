from django.core.mail import send_mail
from django.contrib.auth.models import User

def send_new_screenshot_email(screenshot):
      user_emails = (User.objects
       .exclude(email__isnull=True)
       .values_list('email', flat=True))
 
   # Get unique emails addresses
   user_emails = list(set(user_emails))
 
      send_mail(
         'New Screenshot',
       'New Screenshot from Screenshots',
          'Test Message.',
          'matt@apaxsoftware.com',
         ['mtsmit2@gmail.com'],
       user_emails,
          fail_silently=False,
      )
    send_mail('Subject here', 'Here is the message.', 'from@example.com', ['to@example.com'], fail_silently=False)
