# Elia Bay (demo)

**Demo concept:** website for a *fictional* boutique hotel in Thasos, Greece, with a working availability and booking flow. Built by [Vasileios Varveroglou](https://varveroglouvasileios.github.io/) as a live example of a hotel booking system.

Live: https://varveroglouvasileios.github.io/HotelProject/

Vue 3 + TypeScript + Tailwind + vue-i18n. Greek (default) and English. Mobile first. Photos are AI-generated and illustrative. There is no backend: bookings are simulated and stored in the browser's `localStorage`.

## Try it in two minutes

1. Open the live demo and pick dates about a month ahead, 2 guests, then **Check availability**.
2. Choose a room and complete the booking form. You get a reference code and an email preview.
3. Open **Admin** (password `demo`) and see your booking in the 28-day occupancy grid. You can cancel it there.
4. To see a sold-out room, search for the days about two weeks from today: the Sea View Suite disappears because both units are booked.

## What it shows

- Date and guest search with validation (past dates, order, minimum stay, guests).
- Live availability per room type. A type has several units, and a sold-out night hides the room.
- Season pricing: shoulder June, September and early July; peak 15 Jul to 31 Aug (3-night minimum).
- Booking form with blur validation, a last-moment availability re-check, a reference code and a confirmation page with an email preview.
- Admin (`/#/admin`, demo password `demo`): 28-day occupancy grid, bookings table, cancel, reset demo data.

## Develop

```bash
yarn install
yarn dev       # http://localhost:8991
yarn test      # booking logic (pure functions)
yarn build
```

```
src/lib/booking.ts   dates, pricing, availability, validation (tested)
src/lib/store.ts     localStorage-backed bookings and seed data
src/data/rooms.ts    fictional rooms and prices
src/i18n.ts          Greek and English copy
src/views/           Home, Rooms, Book, Confirmation, Admin
```

## What a real client build adds

- API and database instead of `localStorage`, with the availability check repeated on the server (the client check is only for UX).
- Real emails to guest and hotel, and an admin with proper authentication.
- Payment or deposit provider, and iCal sync with Booking.com and Airbnb if wanted.
- Real photography and copy, and a privacy policy and cookie notice reviewed for the client.

## Deploy

Pushing to `main` builds and publishes to GitHub Pages (`.github/workflows/deploy.yml`).
In the repository settings, set **Pages, Source: GitHub Actions**. The app uses hash routing, so deep links and reloads work on Pages.
The base path is `/HotelProject/`: if you rename the repository, update `VITE_BASE` in the workflow and the default in `vite.config.ts`.
