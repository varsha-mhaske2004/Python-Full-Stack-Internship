from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import StudentSerializer


@api_view(['GET'])
def hello_world(request):
    return Response({
        'message': 'Hello World!',
        'status': 'Success'
    })

@api_view(['GET'])
def student_list(request):
    students = [
        {
            'id': 1,
            'name': 'riya',
            'course': 'BE CSE'
        },
        {
            'id': 2,
            'name': 'Rahul',
            'course': 'BCA'
        }
    ]

    serializer = StudentSerializer(students, many=True)

    return Response(serializer.data)

@api_view(['POST'])
def add_student(request):
    student = request.data

    return Response({
        'message': 'Student added successfully',
        'student': student
    })

@api_view(['PUT'])
def update_student(request):
    student = request.data

    return Response({
        'message': 'Student updated successfully',
        'student': student
    })

@api_view(['DELETE'])
def delete_student(request):
    return Response({
        'message': 'Student deleted successfully'
    })