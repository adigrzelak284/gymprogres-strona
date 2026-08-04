# GymProgres — strona informacyjna V2

Zaktualizowana statyczna strona przeznaczona do wdrożenia pod `https://gymprogres.pl`.

## Najważniejsze zmiany V2 — 4 sierpnia 2026 r.

- zaktualizowany status Android / iOS TestFlight / aplikacja webowa,
- dodany przycisk do `https://app.gymprogres.pl`,
- rozszerzony opis funkcji o wiadomości, zdjęcia postępu, raporty tygodniowe, powiadomienia i wznawianie treningu,
- zaktualizowana polityka prywatności do wersji `1.1 beta`,
- dodane informacje o wiadomościach, zdjęciach, raportach, tokenach push i Firebase,
- rozszerzona instrukcja usuwania konta i danych,
- zaktualizowany regulamin wersji beta,
- zaktualizowana sekcja pomocy i FAQ.

## Zawartość

- strona główna,
- pomoc i kontakt,
- polityka prywatności,
- publiczna instrukcja usuwania konta,
- regulamin wersji beta,
- mapa strony, robots.txt, 404,
- konfiguracja Render Blueprint.

## Przed publikacją

1. Wyślij testową wiadomość na `support@gymprogres.pl` i potwierdź, że odbieranie oraz wysyłanie działa.
2. Sprawdź dane administratora w polityce prywatności i regulaminie.
3. Zweryfikuj, czy wszystkie opisane funkcje i dostawcy odpowiadają aktualnej wersji produkcyjnej.
4. Otwórz `https://app.gymprogres.pl` w trybie incognito i potwierdź działanie.
5. Sprawdź wszystkie linki z katalogu `public`.
6. Przed płatnymi subskrypcjami zaktualizuj regulamin, politykę prywatności i informacje konsumenckie.
7. Przed premierą produkcyjną rozważ przegląd dokumentów przez prawnika, zwłaszcza w zakresie danych dotyczących zdrowia, zdjęć i subskrypcji.

## Wdrożenie na Render

1. Wgraj zawartość tego folderu do repozytorium strony.
2. W Render wybierz istniejącą usługę strony albo **New > Blueprint** i wskaż repozytorium.
3. Render publikuje katalog `public` zgodnie z `render.yaml`.
4. Po wdrożeniu sprawdź adres techniczny `*.onrender.com` oraz domeny:
   - `gymprogres.pl`
   - `www.gymprogres.pl`
5. Nie zmieniaj rekordu `api.gymprogres.pl`.
6. Sprawdź HTTPS i wykonaj odświeżenie bez pamięci podręcznej.

## Adresy do konsol sklepów

- Marketing URL: `https://gymprogres.pl`
- Privacy Policy URL: `https://gymprogres.pl/polityka-prywatnosci.html`
- Support URL: `https://gymprogres.pl/pomoc.html`
- Account Deletion URL: `https://gymprogres.pl/usun-konto.html`
- Regulamin: `https://gymprogres.pl/regulamin.html`
- Aplikacja webowa: `https://app.gymprogres.pl`
