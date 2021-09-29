# Tic tac toe game 

A simple tic tac toe game using vanilla javascript.
This repo is used for teaching purpose.

Demo: https://paulnguyen-mn.github.io/js-tic-tac-toe/

## Game elements

| Element             | Available class    | Desc                  |
| ------------------- | ------------------ | --------------------- |
| `span`#currentTurn  | cross, circle      | Show current turn     |
| `button`#replayGame | show, hide         | Show/Hide replay game |
| `ul`#cellList > li  | cross, circle, win | Cell element          |

## Game flow

```mermaid
graph TD;

A(Init game) --> B(Attach events to game elements);
B --> C(Click on a board cell);
C --> D(Toggle current turn: X or O);

subgraph " "
D --> E(Mark current turn to selected cell);
E --> F{isWin?};

F --NO--> H(Continue game);
F --YES--> G(Show winner and replay button);

end

H --> H1{is 9 cells selected?};
H1 --NO--> H2(Continue game);
H1 --YES--> H3(End game);

G --> I(Click replay)
I --> J(Reset game)
```

Happy coding! ❤️
