var loading_div = $('#loading_div')
var loaded_div = $('#loaded_div')

// default argument
function load_midi() {
    // start_loading_handler();
    //
    // console.log("this just started");
    // MIDI.Player.loadFile(midi_location, stop_loading_handler);
    // console.log("second line of execution")
}

function start_loading_handler(){
    loading_div.hide();
    loaded_div.hide();
}
function stop_loading_handler(){
    console.log("this is working")
    loaded_div.show();
    loading_div.hide();
    $('#play_midi').prop('disabled',false);
    setTimeout(function(){
        loaded_div.hide();
    },5000);
}
function default_files(){
    return {
        "classical":midiDir+"mozart.mid",
        "videogame":midiDir+"videogame.mid",
        "jazz":midiDir+"jazz.mid"
    };
}
var files = default_files();
function get_midi(genre){
    return files[genre];
}
function get_genre(){
    return $('#genreMenu').val();
}
function play_song(genre){
    if (!genre){
        genre = get_genre();
    }
    var midi_file = get_midi(genre);

    MIDIjs.play(midi_file);

    // attempt to use midi.js for the solution - doesn't work

    // MIDI.Player.currentTime = 0; // time we are at now within the song.
    // console.log('loading song');
    // MIDI.loadPlugin({
    //     soundfontUrl: midiDir+"soundfont/",
    //     instruments: [ "acoustic_grand_piano", "acoustic_guitar_nylon" ],
    //     onsuccess: function() {
    //         console.log('loading song');
    //         MIDI.Player.loadFile(midi_file, MIDI.Player.start);
    //     }
    // });
}
function new_song(genre){
    if (!genre){
        genre = get_genre();
    }
    $.getJSON('/newgenre', {'genre' : genre}, function(data, jqXHR){
        console.log("loaded song",data);
        // files[genre] = data['genre']
    })
}
function stop_song(){
    MIDIjs.stop();
}
function new_drop_down()
{
    console.log('changed');
}
// $(document).on('click', '.dropdown-menu li a', function () {
//     var new_genre = $(this).text();
//     $.getJSON('/api/newgenre/',{genre: new_genre}, function(data, jqXHR){
//     });
//     console.log("Selected Option:"+$(this).text());
// });
