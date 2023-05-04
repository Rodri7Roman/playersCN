from users.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class RegisterView(APIView):
    def post(self, request):
        print("Registrando usuario")
        return Response(status=status.HTTP_200_OK, data="Todo OK")
