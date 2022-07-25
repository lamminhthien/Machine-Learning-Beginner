sing_a_song(ananya).
listen_to_music(rohit).

listen_to_music(ananya) :- sing_a_song(ananya).
happy(ananya) :- sing_a_song(ananya).
happy(rohit) :- listen_to_music(rohit).
playes_guitar(rohi) :- listen_to_music(rohit).
