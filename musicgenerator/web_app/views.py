from django.shortcuts import render
from django.core import serializers
from django.http import JsonResponse
from subprocess import call
import pdb
import shutil
import scalable_music_generator as scalable
import sys
# Create your views here.
def index(request):
    return render(request,'index.html')
def aboutus(request):
    return render(request, 'aboutus.html')
def python_query(request, some_data):
    sys.path.append("/Users/philkuz/Programming/MusicGenerator/musicgenerator/web_app/")
    music_generator=scalable.Scalable_Midi_Generator(some_data)


    data = serializers.serialize('json', some_data)
    return HttpResponse(data, mimetype='application/json')
    #some_data=request.GET.get('some_data')
    #return some_data
genre_to_gen = {"classical":"mozart", "jazz":"jazz","videogame":"videogame"}
def new_song(request, genre="classical"):
    # if genre not in genre_to_gen:
    #     return HttpResponseBadRequest("No genre found");
    genre = request['genre']
    gen = genre_to_gen(genre)
    subprocess.call("./gens/"+gen)
    pdb.set_trace()
    file_name = '{0}.mid'.format(genre)
    file_path = 'static/midi/'+file_name
    shutil.copyfile('music.mid',file_path)
    return JsonResponse({'file':file_name})
