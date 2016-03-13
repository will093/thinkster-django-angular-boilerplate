from rest_framework import permissions, viewsets

from authentication.models import Account
from authentication.permissions import IsAccountOwner
from authentication.serializers import AccountSerializer


class AccountViewSet(viewsets.ModelViewSet):
    lookup_field = 'username'
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def get_permissions(self):
        # Allow permissions for anyone if the method is in the predefined list of safe methods (eg. GET).
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        # Allow permissions to anyone for post method.
        if self.request.method == 'POST':
            return(permissions.AllowAny(),)

        # Otherwise, only allow permissions to the authenticated account owner.
        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        # If data is valid, create a user and send appropriate response.
        if serializer.is_valid():
            Account.objects.create_user(**serializer.validated_data)

            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

        # Otherwise, return bad request response.
        return Response({
            'status': 'Bad request',
            'message': 'Account could not be created with received data.'
        }, status=status.HTTP_400_BAD_REQUEST)
