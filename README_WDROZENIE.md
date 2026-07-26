# GymProgres — strona informacyjna V1

Gotowa statyczna strona przeznaczona do wdrożenia pod `https://gymprogres.pl`.

## Zawartość

- strona główna,
- pomoc i kontakt,
- polityka prywatności,
- publiczna instrukcja usuwania konta,
- regulamin wersji beta,
- mapa strony, robots.txt, 404,
- konfiguracja Render Blueprint.

## Przed publikacją

1. Wyślij testową wiadomość na `support@gymprogres.pl` i potwierdź, że przekierowanie lub skrzynka działa.
2. Sprawdź dane administratora w polityce prywatności i regulaminie.
3. Zweryfikuj opis faktycznie zbieranych danych oraz usług zewnętrznych.
4. Przed płatnymi subskrypcjami zaktualizuj regulamin, politykę prywatności i informacje konsumenckie.
5. Przed produkcyjną publikacją rozważ przegląd dokumentów przez prawnika, zwłaszcza w zakresie danych dotyczących zdrowia i subskrypcji.

## Wdrożenie na Render

1. Utwórz nowe repozytorium GitHub, np. `gymprogres-strona`.
2. Wgraj całą zawartość tego folderu, łącznie z `render.yaml`.
3. W Render wybierz **New > Blueprint** i wskaż repozytorium.
4. Render utworzy statyczną stronę z katalogu `public`.
5. Najpierw sprawdź adres `*.onrender.com`.
6. W ustawieniach strony wybierz **Custom Domains** i dodaj:
   - `gymprogres.pl`
   - `www.gymprogres.pl`
7. W panelu DNS OVH wpisz rekordy dokładnie pokazane przez Render. Nie zmieniaj rekordu `api.gymprogres.pl`.
8. Po weryfikacji domeny Render automatycznie wystawi HTTPS.

## Adresy do sklepów

- Polityka prywatności: `https://gymprogres.pl/polityka-prywatnosci.html`
- Pomoc: `https://gymprogres.pl/pomoc.html`
- Usuwanie konta: `https://gymprogres.pl/usun-konto.html`
- Regulamin: `https://gymprogres.pl/regulamin.html`
