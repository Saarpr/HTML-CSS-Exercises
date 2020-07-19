from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .models import Trip
from django.views.generic import ListView, DetailView
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core import serializers


# Create your views here.

def home(request):
    context = {
        'trips':Trip.objects.all()
    }
    return render(request, 'feed/feed.html',context)
#    return HttpResponse('<h1> Feed Home</h1>')

class TripListView (ListView):
    model = Trip
    template_name = 'feed/feed.html'
    context_object_name = 'trips'
    ordering = ['date_posted']


@login_required
def myTrips(request):
    trips = Trip.objects.filter(user = request.user).order_by('-start_date')
    trips_json = serializers.serialize("json", Trip.objects.filter(user = request.user).order_by('-start_date'))
    context = {
        'trips': trips,
        'trips_json':trips_json
    }
    return render(request, 'feed/feed.html', context)




class TripDetailView (DetailView):
    model = Trip

@login_required
def createNewTrip(request):
    usr = serializers.serialize("json", User.objects.all())
    context = {
        'users': usr
    }
    if request.method == 'POST':
        trip = Trip()
        trip.user = request.user
        trip.where = request.POST.get("where")
        trip.start_date = request.POST.get("from")
        trip.end_date = request.POST.get("to")
        trip.multi_round = request.POST.get("radio-group")
        trip.budget = int(request.POST.get("budget"))
        trip.save()
        return HttpResponseRedirect('/feed/trip/{}/'.format(trip.trip_id) )
    else:
        return render(request, 'feed/trip_form.html', context)

@login_required
def updateTrip(request, pk=None):
    obj = get_object_or_404( Trip, pk=pk)
    usr = serializers.serialize("json", User.objects.all())
    context = {
        'trip': obj,
        'users': usr
    }
    if request.method=='GET':
        return render(request, 'feed/update_form.html', context)
    else:
        try:
            obj.where = request.POST.get("where")
            obj.start_date = request.POST.get("from")
            obj.end_date = request.POST.get("to")
            obj.multi_round = request.POST.get("radio-group")
            obj.budget = int(request.POST.get("budget"))
            obj.save()
            return HttpResponseRedirect('/feed/trip/{}/'.format(obj.trip_id))
        except ValueError:
            return render(request, 'feed/update_form.html', context)

@login_required
def deleteTrip(request, pk):
    trip = get_object_or_404(Trip, pk=pk, user=request.user)
    if (request.method == 'GET'):
        trip.delete()
        return redirect(myTrips)
