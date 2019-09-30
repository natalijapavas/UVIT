[Vežbe](../../../README.md)

[Knjiga](../../README.md)

---

# 1. Struktuiranje Veb dokumenata kroz HTML

*HyperText Markup Language* (skr. *HTML*) predstavlja najosnovniji blok za izgradnju Veba. HTML jezik se koristi za opisivanje logičke strukture stranice, odnosno, na koji način je Veb dokument izgrađen. Na primer, u HTML jeziku možemo zadati koji deo stranice čini naslov ili paragraf, gde se nalazi slika, kako se podaci predstavljaju tabelom i slično.

## 1.1 Osnovni elementi HTML dokumenata

HTML dokument se izgrađuje od velikog broja HTML *elemenata* (engl. *element*). Neki od njih definišu *metainformacije* (engl. *metadata*), odnosno, informacije o samom dokumentu, a drugi definišu konkretan sadržaj, kao što su paragraf, slika i dr. Struktura jednog elementa se sastoji od dve *etikete* (engl. *tag*), otvarajuće i zatvarajuće, između kojih se nalazi *sadržaj* (engl. *content*) tog elementa. Sadržaj može biti tekstualnog tipa ili može biti niz nekih drugih HTML elemenata. Naredni kod ilustruje primer HTML elementa `p`.

```html
<p>                     <!-- Otvarajuca etiketa za element "p". -->
    Tekst ide ovde.     <!-- Sadrzaj elementa. -->
</p>                    <!-- Zatvarajuca etiketa za element "p". -->
```

Takođe, postoje elementi koji imaju samozatvarajuću etiketu. Naredni kod ilustruje primer samozatvarajućeg HTML elementa `img`.

```html
<img>                   <!-- Samozatvarajuca etiketa za element "img". -->
```

U nastavku teksta ćemo, kada uvodimo novi element, podrazumevati da je reč o elementu koji ima otvarajuću i zatvarajuću etiketu. Posebno ćemo naglasiti ukoliko je reč o samozatvarajućem elementu.

U prethodnim primerima smo videli i primer HTML komentara. Svaki HTML komentar počinje oznakom `<!--` i završava se oznakom `-->`. Sve što je unutar ove dve oznake neće biti prikazano na stranici, slično kao što komentari u programskim jezicima, na primer C, ne utiču na kompiliranje i izvršavanje koda.

Elemente možemo dodatno okarakterisati *atributima* (engl. *attribute*). Svaki HTML element definiše skup atributa kojima se može okarakterisati. Svaki atribut definiše domen iz kojeg se mogu uzimati vrednosti tog atributa. Atributi su oblika `atribut="vrednost"` i navode se isključivo u okviru otvorene etikete. Naredni kod ilustruje element `body` koji je okarakterisan atributom `id` čija je vrednost `telo`.

```html
<body id="telo">
    ...
</body>
```

Postoje generički atributi koji se mogu primeniti na svim elementima, a postoje i specifični atributi za pojedine elemente. Na primer, svi elementi mogu imati atribut `id`, dok samo element `form` može imati atribut `onsubmit`. U ovom poglavlju knjige ćemo se posvetiti upoznavanju različitih HTML elemenata i atributima kojima oni mogu biti okarakterisani. Pre nego što pređemo na pojedinačne elemente, prikažimo i objasnimo neke od generičkih atributa:

- Atribut `class` se koristi za određivanje *klasa* (engl. *class*) kojima element pripada. Element može pripadati jednoj klasi ili više njih. Takođe, jedna klasa može biti dodeljena većem broju elemenata. Vrednost ovog atributa je niz naziva klasa koje se pridodaju elementu, odvojenih znakon razmaka. Na primer, u kodu `<div class="obavestenje"></div>` elementu `div` je dodeljena klasa čiji je naziv `obavestenje`, dok u kodu `<p class="crveni-tekst velika-slova"></p>` elementu `p` su dodeljene dve klase: `crveni-tekst` i `velika-slova`. Nazivi klasa se mogu sastojati od karaktera slova (`a`-`z`, `A`-`Z`), cifara (`0`-`9`), crtice (`-`) i podvlake (`_`) i moraju počinjati karakterom slova.

- Atribut `id` se koristi za određivanje *identifikatora* (engl. *identifier*) elementa. Za razliku od atributa klasa, svaki element može imati najviše jedan identifikator i najviše jedan element može imati neki identifikator. HTML dokument nije validan ukoliko je isti identifikator dodeljen većem broju elemenata. Na primer, u kodu `<nav id="navigacija"></nav>` elementu `nav` je dodeljen identifikator `navigacija`. Pravila imenovanja za identifikatore su identična pravilima za imenovanje klasa.

- Atribut `style` služi za postavljenje stilova nad jednim elementom korišćenjem jezika CSS. Više o ovom atributu će biti reči u narednom poglavlju.

- Atribut `title` služi za navođenje dodatnih informacija o elementu. Veb pregledači najčešće prikazuju ove informacije u vidu *informacione poruke* (engl. *tooltip*) prilikom postavljanja kursora miša na element.

- Atribut `lang` služi za navođenje jezika za sadržaj elementa. Vrednost ovog atributa je kod jezika koji želimo da postavimo. Kompletan spisak kodova jezika se može pronaći na adresi [https://www.w3schools.com/tags/ref_language_codes.asp](https://www.w3schools.com/tags/ref_language_codes.asp).

Sada kada smo upoznati sa osnovnim elementima jezika HTML, započnimo kreiranje naših prvih HTML dokumenata.

## 1.2 Kreiranje HTML dokumenata

HTML dokumenti se na Vebu prepoznaju po ekstenziji `html`. HTML dokumenti predstavljaju jedan od mnogobrojnih tipova Veb resursa. Svakom resursu je dodeljen tip koji se naziva *Multipurpose Internet Mail Extensions* (skr. *MIME*) tip. Tako HTML dokumentima odgovara MIME tip `text/html`.

Osnovna struktura svakog HTML dokumenta data je u narednom kodu.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Naslov</title>
    <meta charset="UTF-8">
</head>

<body>
</body>

</html>
```

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/1/index.html"
   target="_blank">Pogledaj primer uživo</a>

Deklaracija dokumenta `<!DOCTYPE html>` predstavlja posebnu vrstu elementa kojom se definiše verzija HTML dokumenta koja se koristi. Konkretno, ovom deklaracijom navodimo da ćemo koristiti verziju 5 HTML standarda.

Elementom `html` definišemo sadržaj HTML dokumenta. Svi HTML dokumenti se sastoje od dva dela:

- *Zaglavlje* (engl. *head* ili *header*) sadrži informacije o samom dokumentu, kao i linkove ka definicijama stilova (CSS) i programskih elemenata (JavaScript). Ove informacije služe da opišu dokument i one nisu vidljive na stranici. Primeri informacija su: naslov, opis, jezik, ključne reči, itd. Zaglavlje je definisano elementom `head`.

- *Telo* (engl. *body*) sadrži vizuelne elemente koji će biti prikazani korisniku. Sve što se nalazi u telu dokumenta je vidljivo u okviru veb pregledača. Takođe, sve što želimo da bude vidljivo, moramo da stavimo u telo dokumenta. Telo je definisano elementom `body`.

Objasnimo i preostale elemente. Element `title` služi za davanje semantičkog naslova dokumenta. Ovaj naslov će se prikazivati u većini veb pregledača kao ime kartice u kojoj je dokument otvoren, ali i u rezultatima pretrage. Element `meta` nudi različite mogućnosti za dodavanje metainformacija dokumentu, najčešće u vidu atributa ovog elementa. Na primer, atributom `charset="UTF-8"` postavlja se UTF-8 kao kodna shema za dokument. U nastavku ćemo videti još neke primere metainformacija.

U prethodnom primeru takođe vidimo obaveznu strukturu svakog HTML dokumenta, definisanu HTML specifikacijom. Možemo testirati da li naš HTML dokument predstavlja validno napisan dokument pomoću HTML validatora. Jedan primer validatora je moguće pronaći na adresi [https://html5.validator.nu/](https://html5.validator.nu/). Na primer, da smo izostavili element `title`, validator bi se pobunio i prikazao nam odgovarajuću poruku, što je prikazano na narednoj slici.

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/html_validacija_greska.png" alt="Primer pokretanja HTML5 validatora nad dokumentom koji nije konstruisan u skladu sa HTML5 standardom.">
</div>

Kroz ovu jednostavnu strukturu vidimo da se svi HTML elementi (sa izuzetkom specijalnog elementa `<!DOCTYPE html>`) nalaze u okviru sadržaja nekih drugih elemenata. Jedini izuzetak od ovog pravila je element `html`. Zapravo, svi HTML elementi formiraju drvoliku strukturu u čijem se korenu nalazi element `html`. Ova drvolika struktura se naziva *Document Object Model* (skr. *DOM*) i svaki veb pregledač prilikom parsiranja HTML dokumenta u svojoj memoriji formira ovu strukturu, koja se često naziva *DOM stablo* (engl. *DOM tree*). Primer DOM stabla za osnovnu strukturu svakog HTML dokumenta data je na narednoj slici.

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/dom.png" alt="Prikaz DOM stabla za osnovnu strukturu svakog HTML dokumenta. Svaki čvor u stablu predstavlja ili HTML element (krug) ili tekstualni sadržaj (pravougaonik). Atributi koji okarakterišu HTML elemente su prikazani u listi koja je povezana isprekidanom linijom sa datim HTML elementom koji oni okarakterišu.">
</div>

Kao što smo rekli, zaglavlje HTML dokumenta predstavljeno je elementom `head`. Takođe, upoznali smo se sa dva važna elementa zaglavlja: `title`, koji definiše naslov dokumenta i `meta` koji zadaje metainformacije o dokumentu. Najveći broj metainformacija se zadaje u obliku para atributa `name="..."` i `content="..."`. U sledećoj tabeli dat je spisak nekih metainformacija i primer njihovog korišćenja.

| Naziv | Primer upotrebe |
| ----- | --------------- |
|`language` | `<meta name="language" content="sr">` |
|`author` | `<meta name="author" content="Ajzenhamer N, Bukurov A.">` |
|`keywords` | `<meta name="keywords" lang="sr" content="html, uvit">` |
|`description` | `<meta name="description" content="Primer HTML datoteke">` |
|`generator` | `<meta name="generator" content="Visual Studio Code">` |

Telo HTML dokumenta je određeno elementom `body`. U okviru njegovog sadržaja, potrebno je da vršimo ugnežđavanje elemenata koje želimo da prikažemo korisniku. Dakle, u okviru tela elemenata ne želimo da smeštamo metainformacije, već strukturu samog HTML dokumenta. HTML standard definiše veliki broj strukturnih elemenata, i u nastavku poglavlja ćemo se upoznati sa velikim brojem ovih elemenata.

## 1.3 Blokovski i linijski elementi

HTML elemente možemo podeliti na različite načine. Jedna od najkorisnijih podela jeste na naredne dve kategorije elemenata[^1]:

[^1]: Ove kategorije HTML elemenata su definisane standardom pre HTML5, dok se u verziji HTML5 definišu nove kategorije. Ipak, ova podela je dosta lakša za razumevanje, te zato koristimo staru terminologiju umesto nove.

- Veb pregledači *blokovske elemente* (engl. *block element*) tipično prikazuju sa praznim redom pre i nakon elementa. Možemo ih vizualizovati kao kutije koje se slažu jedna ispod druge. Dodatno, blokovski elementi zauzimaju čitavu širinu elementa u kojem se nalaze.

- Za razliku od njih, *linijski elementi* (engl. *inline element*) mogu da počinju bilo gde u liniji (ne nužno na početku novog reda) i njihova veličina zavisi od veličine njihovog sadržaja.

Jedna važna karakteristika ovih kategorija jeste da blokovski elementi mogu da sadrže linijske elemente i druge blok elemente, dok linijski elementi mogu da sadrže samo linijske elemente.

Na primeru opisanih elemenata možemo demonstrirati ovo ponašanje. Na narednim slikama su dati primeri blokovskog (slika A) i linijskog (slika B) elementa, čiji je vizualni prikaz jasno istaknut.

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/block.png" alt="Primer prikaza jednog blokovskog elementa (A) i jednog linijskog elementa (B). Obama elementima je postavljena boja pozadine na žutu boju kako bi se  razlikovali od ostalih elemenata koji se nalaze oko njih.">
<br>
(A) Primer blokovskog elementa
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/2/index.html"
   target="_blank">Pogledaj primer uživo</a>

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/inline.png" alt="Primer prikaza jednog blokovskog elementa (A) i jednog linijskog elementa (B). Obama elementima je postavljena boja pozadine na žutu boju kako bi se  razlikovali od ostalih elemenata koji se nalaze oko njih.">
<br>
(B) Primer linijskog elementa
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/3/index.html"
   target="_blank">Pogledaj primer uživo</a>

## 1.4 Elementi za grupisanje sadržaja

HTML5 standard je uveo nove elemente kojima je moguće pridružiti semantičko značenje delovima HTML dokumenata. Neki od tih elemenata su:

- Element `header` za naslovni sadržaj
- Element `nav` za navigacioni sadržaj
- Element `main` za glavni sadržaj
- Element `footer` za završni sadržaj
- Element `aside` za sadržaj sa strane, dodatni sadržaj, i sl.
- ...

Važno je razumeti da ovi elementi definišu isključivo semantičku organizaciju elemenata na stranici, odnosno, oni dodeljuju odgovarajuće značenje elementima koje sadrže i ne podrazumevaju nikakav poseban način prikazivanja tih  elemenata. Na narednoj slici prikazan je primer upotrebe ovih elemenata.

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/html5_elementi.png" alt="Primer podele HTML dokumenta korišćenjem nekih od HTML5 semantičkih elemenata.">
</div>

Elemente možemo grupisati bez nekog unapred određenog semantičkog značenja, najčešće radi izdvajanja logičkih celina, koje se potom veoma često i vizualno izdvajaju od ostalih celina. Primera radi, HTML5 standard ne definiše element koji bi mogao prikazivati obaveštenja na stranici, ali mi možemo grupisati više elemenata koji obrazuju obaveštenje, a zatim ga stilizovati na neki prepoznatljiv način. 

U tu svrhu, na raspolaganju nam je blokovski element `div`, koji poput HTML5 semantičkih elemenata ne podrazumeva poseban način prikazivanja, već pomoću njega možemo da izdvojimo i, najčešće, imenujemo celine koje ćemo stilizovati na neki način. 

## 1.5 Elementi za prikaz teksta

HTML definiše nekoliko grupa elemenata za prikaz teksta. Neki od njih su:

- Naslovi
- Paragraf
- Linijski tekst
- Citati

### 1.5.1 Naslovi

Tekst možemo istaknuti u vidu naslova koristeći blokovske elemente `<h1>` do `<h6>`. Oni takođe dodeljuju semantički značaj tekstu koji obeležavaju. Takođe, oni podrazumevaju i odgovarajući prikaz teksta, koji je dat na narednoj slici koja prati naredni kod.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 4</title>
    <meta charset="UTF-8">
</head>

<body>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/naslovi.png" alt="Primer prikaza naslova h1 do h6 u Veb pregledaču.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/4/index.html"
   target="_blank">Pogledaj primer uživo</a>

### 1.5.2 Paragraf, novi red i separacija sadržaja

Pored naslova, tekst možemo obeležiti i blokovskim elementom `p` koji definiše jedan paragraf teksta. Podrazumevano, tekst obeležen ovim elementom se prostire celom širinom elementa u kojem se nalazi (kao i svaki drugi blokovski element). Tako, na primer, ukoliko se nalazi u elementu `body`, tekst će se prostirati celom širinom prozora veb pregledača.

Na narednoj slici dat je prikaz HTML koda u nastavku, koji definiše tri paragrafa teksta. Kao što se vidi sa slike, bez obzira na broj belina u okviru teksta koji predstavlja sadržaj elementa `p`, veb pregledači prikazuju najviše jedan znaka razmaka između reči. Ovo pravilo važi u opštem slučaju, ne samo za paragraf `p`.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 5</title>
    <meta charset="UTF-8">
</head>

<body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus enim
        eu nulla ultricies finibus. Sed a lacus vulputate, scelerisque tellus eu, iaculis
        justo. Curabitur aliquet velit vel odio lacinia tristique ultricies vitae odio.
        Quisque pharetra et purus fringilla placerat.</p>

    <p>
        Aliquam sed velit sed urna varius semper. Proin vehicula dui sed mauris
        rhoncus, nec molestie leo ullamcorper. Morbi ultricies interdum nisi, quis
        volutpat orci tempor eget. Nulla magna lectus, condimentum ac tellus id,
        aliquam euismod ipsum. Nunc eget egestas metus, a congue orci.
    </p>

    <p>
        Donec ut vestibulum nulla,

        nec scelerisque lectus. Donec rhoncus, massa et


        hendrerit euismod
        , ex enim congue


        diam, a feugiat felis


        diam id ante. Praesent dapibus orci lorem. Aliquam at elit eros.
    </p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/paragraf.png" alt="Primeri upotrebe elementa p. Elementi su stilizovani radi prikazivanja  njihovih karakteristika kao predstavnici blokovskih elemenata.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/5/index.html"
   target="_blank">Pogledaj primer uživo</a>

Ukoliko želimo da tekst prelomimo u novi red, potrebno je da na odgovarajućoj poziciji umetnemo samozatvarajući element `<br>`. Na narednoj slici dat je prikaz paragrafa koji je prelomljen na dva mesta - prvi put sa jednim prelomom, a drugi put sa tri preloma (koji prikazuju dve prazne linije teksta). Još jednom skrećemo pažnju da bez obzira na broj belina u tekstu, veb pregledač generiše najviše jedan karakter razmaka, kao što je prikazano na datoj slici, koja je generisana narednim HTML kodom.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 6</title>
    <meta charset="UTF-8">
</head>

<body>
    <p>
        For 50 years, WWF has been protecting the future of nature.
        <br>
        The world's leading conservation organization,




        WWF works in 100 countries and is supported by
        <br>
        <br>
        <br>
        1.2 million members in the United States and
        close to 5 million globally.
    </p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/br.png" alt="Primeri upotrebe elementa br.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/6/index.html"
   target="_blank">Pogledaj primer uživo</a>

Standardom HTML5 je definisano ponašanje elementa `hr` kao definisanje tematske podele u HTML dokumentu, na primer, promenu teme. On se koristi ukoliko želimo da razdvojimo sadržaj ili definišemo promenu na HTML stranici. U prethodnim HTML standardima, ovaj element je služio kao horizontalna linija, te se zbog toga u većini veb pregledača danas on i prikazuje kao horizontalna linija. Ipak, njegovo značenje je danas više semantičko nego prezentaciono. Naredni kod ilustruje upotrebu ovog elementa, a njegov prikaz je dat na narednoj slici.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 7</title>
    <meta charset="UTF-8">
</head>

<body>
    <p>
        Ovaj paragraf bi trebalo da sadrzi tekst koji govori nesto o
        HTML jeziku za obelezavanje teksta.
    </p>

    <hr>

    <p>
        Ovaj paragraf bi trebalo da sadrzi tekst koji govori nesto o
        CSS jeziku za stilizovanje.
    </p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/hr.png" alt="Primeri upotrebe elementa hr.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/7/index.html"
   target="_blank">Pogledaj primer uživo</a>

### 1.5.3 Linijski tekst

Element `span` definiše deo teksta, najčešće jednu reč ili deo rečenice (ali ne nužno). Veličina elementa zavisi od veličine teksta koji se nalazi kao njegov sadržaj. Očigledno, ova karakteristika potiče od činjenice da je element `span` predstavnik linijskih elemenata. Na narednoj slici je dat prikaz narednog HTML koda, koji definiše dva `span` elementa u okviru paragrafa. Sa slike se jasno vidi da element `span` u oba slučaja zauzima samo onoliko prostora koliko zauzima njegov sadržaj.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 8</title>
    <meta charset="UTF-8">

    <link rel="stylesheet" type="text/css" href="index.css">
</head>

<body>
    <p>
        Lorem ipsum dolor sit amet,

        <span>consectetur</span>

        adipiscing elit. Aliquam luctus enim eu nulla ultricies finibus.
        Sed a lacus vulputate, scelerisque tellus eu,

        <span>iaculis justo. Curabitur aliquet velit vel odio lacinia tristique ultricies vitae odio. Quisque pharetra et purus fringilla</span>
        
        placerat.
    </p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/span.png" alt="Primeri upotrebe elementa span. Elementi su stilizovani radi prikazivanja njihovih karakteristika kao predstavnici linijskih elemenata. Boja pozadine prvog span elementa je postavljena na ljubičastu boju, a boja pozadine drugog span elementa je postavljena na crvenu boju.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/8/index.html"
   target="_blank">Pogledaj primer uživo</a>

### 1.5.4 Citati

Citati se mogu prikazati na više načina. Na primer, linijskim elementom `q` veb pregledač obično doda znake navoda oko teksta koji predstavlja sadržaj tog elementa. Na narednoj slici dat je prikaz narednog HTML koda.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 9</title>
    <meta charset="UTF-8">
</head>

<body>
    <p>
        Browsers usually insert quotation marks around the q element.
    </p>

    <p>
        WWF's goal is to:
        <q>Build a future where people live in harmony with nature.</q>
    </p>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/q.png" alt="Primeri upotrebe elementa q.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/9/index.html"
   target="_blank">Pogledaj primer uživo</a>

Element `blockquote` se obično koristi ukoliko želimo da istaknemo neki citat. Veb pregledač će obično uvući prikaz teksta koji predstavlja citat. Element `blockquote` je predstavnik blokovskih elemenata, što je vidljivo na narednoj slici koja daje prikaz narednog HTML koda.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Primer 10</title>
    <meta charset="UTF-8">
</head>

<body>
    <span>Begin quote</span>
    <blockquote cite="http://www.worldwildlife.org/who/index.html">
        For 50 years, WWF has been protecting the future of nature.
        The world's leading conservation organization,
        WWF works in 100 countries and is supported by
        1.2 million members in the United States and
        close to 5 million globally.
    </blockquote>
    <span>End quote</span>
</body>

</html>
```

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/blockquote.png" alt="Primeri upotrebe elementa blockquote.">
</div>

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/10/index.html"
   target="_blank">Pogledaj primer uživo</a>

---

[Knjiga](../../README.md)

[Vežbe](../../../README.md)

<!--
<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/.png" alt="">
</div>
-->

<!-- 
<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/X/index.html"
   target="_blank">Pogledaj primer uživo</a>
-->