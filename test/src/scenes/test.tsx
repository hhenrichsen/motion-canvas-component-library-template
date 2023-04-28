import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import { easeInBack, easeInQuad, easeOutBack, linear } from "@motion-canvas/core/lib/tweening";
import { createRef, debug } from "@motion-canvas/core/lib/utils";
import { all, waitFor } from '@motion-canvas/core/lib/flow';
import {Terminal} from '@components/TerminalComponent';

export default makeScene2D(function* (view) {

    const term = createRef<Terminal>();
    view.add(<Terminal ref={term} size={0} padding={0} cursorType={'block'} position={[0, 0]}/>);


    yield* waitFor(1);
    yield* term().prompt();
    yield* waitFor(0.5);
    yield* all(
    term().padding(32, 0.5, easeOutBack),
    term().size([1600, 800], 0.5, easeOutBack),
    );
    yield* waitFor(0.2);
    yield* term().type('ls -l', 1.5);

    yield* waitFor(0.2);

    yield* term().line('\ndrwxr-xr-x 2 root users 4096 May 10 18:05 ', "#908f8f");
    yield* term().line('Desktop', '#29257e');
    yield* term().line('\ndrwxr-xr-x 2 root users 4096 May 9 11:25 ', "#908f8f");
    yield* term().line('Documents', '#29257e');
    yield* term().line('\ndrwxr-xr-x 2 root users 4096 Aug 21 21:52 ', "#908f8f");
    yield* term().line('Downloads', '#29257e');
    yield* term().line('\ndrwxr-xr-x 2 root users 4096 Jan 28 02:34 ', "#908f8f");
    yield* term().line('Music', '#29257e');
    yield* term().line('\ndrwxr-xr-x 2 root users 4096 Feb 1 10:11 ', "#908f8f");
    yield* term().line('Pictures', '#29257e');
    yield* term().line('\n-rwxrwx--- 1 root users 1140 Sep 9 16:13 ', "#908f8f");
    yield* term().line('example.py', '#53a453');
    yield* term().prompt();

    yield* waitFor(1.4);
    yield* term().type('python example.py', 2.5);
    yield* term().newline();
    yield* term().prompt();

    
    yield* waitFor(1.4);
    yield term().textStyle.fontSize(35, 2)
    yield term().textStyle.height(40, 2)
    yield term().cursor.height(40, 2)
    yield term().cursor.width(40*(8/13), 2)
    yield* term().type('sudo nano example.py', 3.5);
    yield* waitFor(1.4);
    yield* term().clear(false, false);




    const nn = "  GNU nano 2.9.3"
    var file: string = term().formatTextList(["File: example.py"], term().getMaxChars())
    const final = nn + file.slice(nn.length, file.length)
    yield* term().line(final, "#060604", '#66e644');
    yield* term().line("\n\n", '#66e644')
    const va = yield* term().line("print('')", '#66e644');

    const v = term().getLast()
    for (var i = 0; i < term().getMaxLines()-3; i++) {
        yield* term().newline();
    }

    const o = term().formatTextList(["[ Read 1 lines ]"], term().getMaxChars()).split("[ Read 1 lines ]")
    const fa = yield* term().line("."+o[0].slice(0, o[0].length-1), "#222222");
    const fi = yield* term().line("[ Read 1 lines ]", "#060604", '#66e644');
    const u = term().getLast()

    const shortcuts = ["\n^G", "^O", "^R", "^Y", "^K", "^C", "\n^X", "^J", "^W", "^V", "^U", "^T"]
    const names = [" Get Help ", " WriteOut ", " Read File ", " Prev Page ", " Cut Text  ", " Cur Pos ", " Exit     ", " Justify  ", " Where Is  ", " Next Page ", " UnCut Text", " To Spell  "]
    var shortcutsref = []
    var namesref = []

    for (var i = 0; i < shortcuts.length; i++) {
        shortcutsref[i] = yield* term().line(shortcuts[i], "#060604", '#66e644')
        namesref[i] = yield* term().line(names[i], '#66e644')
    }

    v.add(term().cursor)
    yield* term().blink()
    term().cursor.fill("#66e644")
    yield* waitFor(1);
    yield* term().blink(false)
    yield* va.text().text("print(''",0.5)
    yield* va.text().text("print('",0.5)
    yield* va.text().text("print('Hello World!')", 3)
    yield* waitFor(0.8);
    yield* term().blink()

    for (var i = 0; i < shortcutsref.length; i++) {
        shortcutsref[i].text().text("")
        namesref[i].text().text("")
    }

    shortcutsref[0].text().text(" Y")
    namesref[0].text().text(" Yes")
    shortcutsref[shortcutsref.length/2].text().text(" N")
    namesref[shortcutsref.length/2].text().text(" No           ")
    shortcutsref[(shortcutsref.length/2)+1].text().text("^C")
    namesref[(shortcutsref.length/2)+1].text().text(" Cancel")

    fa.text().text("Save modified buffer?");
    fa.highlight().fill("#66e644");
    fi.text().text(" _                                                   ");
    u.add(term().cursor)    
    yield* waitFor(1);
    yield* term().blink()
    term().cursor.fill("#ffffff")
    yield* term().clear(true, false);
    yield* waitFor(1);
    yield* term().type('python example.py', 2.5);
    yield* term().line("\nHello World!");
    yield* term().prompt();

    yield* waitFor(3);
    yield* term().clear();
    yield* all(
        term().padding(1, 0.5, easeInBack),
        term().size([0, 0], 0.5, easeInBack),
        );
    yield* waitFor(0.2);
});