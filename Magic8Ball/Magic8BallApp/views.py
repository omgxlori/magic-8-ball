from django.shortcuts import render
import random
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
ANSWERS = [
  "Yes - definitely",
    "It is decidedly so",
    "Without a doubt",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Don't count on it",
    "Cannot predict now",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "No",
    "Not a chance",
    "Absolutely",
    "Certainly",
]

@api_view(['GET'])
def get_answer(request):
    answer = random.choice(ANSWERS)
    return Response({answer})