from rest_framework import permissions
 
 
class TargetUser(permissions.BasePermission):
    def has_permission(self, request, view):
        # allow user to list all users if logged in user 
        return view.action == 'retrieve' or request.user

    def has_object_permission(self, request, view, obj):
        # allow logged in user to view own details, allows  to view all records
        return request.user or obj == request.user