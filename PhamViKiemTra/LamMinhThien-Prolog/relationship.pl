mother(X,Y) :- parent(X,Y), female(X).
sister(X,Y) :- parent(Z,X),parent(Z,Y),female(X), X \== Y.
