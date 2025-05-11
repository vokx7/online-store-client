# 🛒 Uproszczony klient sklepu internetowego

## 📌 Opis projektu

Projekt to uproszczona wersja klienta sklepu internetowego. Aplikacja umożliwia:

* przeglądanie listy produktów,
* dodawanie i usuwanie produktów z koszyka,
* przeglądanie podsumowania zamówienia przed jego złożeniem,
* wyświetlanie potwierdzenia złożenia zamówienia.

Projekt zrealizowany w oparciu o **React + TypeScript**, z użyciem **Vite** jako bundlera oraz **HTML** i **CSS** do stylizacji.

---

## 🧠 Podejście

Podczas tworzenia aplikacji skupiłam się na:

* wykorzystaniu `Context` do zarządzania stanem koszyka oraz wyświetlania treści produktów,
* przechowywaniu stanu koszyka w `localStorage`,
* zastosowaniu `React Router` w poruszaniu się po aplikacji (z wyłączeniem strony potwierdzenia),
* stworzenie `MPA` poprzez Vite dla strony potwierdzenia zamówienia,
* dobrej organizacji konponentów w celu zachowania przejrzystości kodu.

---

## ⚙️ Założenia

* Produkty pochodzą z lokalnego źródła danych (products.json).
* Możliwe jest przejście całego procesu bez dodania przedmiotów do koszyka.
* Po potwierdzeniu zamówienia i powrocie do listy produktów, koszyk jest czyszczony.
* Potwierdzenie Zamówienia (order-confirmation) jest oddzielną stroną.
* Zmniejszanie ilości produktów w koszyku poniżej 1 usuwa cały wiersz.
* Rozwój wizualny aplikacji nie był brany pod uwagę - minimalna ingerencja w kod CSS.

---

## 🚀 Jak uruchomić projekt lokalnie

1. **Zainstaluj zależności**:

   ```bash
   npm install
   ```

2. **Uruchom aplikację w trybie developerskim**:

   ```bash
   npm run dev
   ```

3. **Otwórz aplikację w przeglądarce**:

   ```
   http://localhost:3000
   ```


