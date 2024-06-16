// pages/api/events.js
export default function handler(req, res) {
  const events = [
    { "id": 1, "date": { "day": "15", "month": "feb" }, "location": { "city": "Delhi", "country": "india", "adress": "laxmi nagar" }, "priceRange": "60" },
    { "id": 2, "date": { "day": "23", "month": "march" }, "location": { "city": "noida", "country": "india", "adress": "sector 63" }, "priceRange": "60" },
    { "id": 3, "date": { "day": "10", "month": "dec" }, "location": { "city": "Pune", "country": "india", "adress": "laxmi nagar" }, "priceRange": "60" },
    { "id": 4, "date": { "day": "25", "month": "mar" }, "location": { "city": "nabh", "country": "india", "adress": "laxmi nagar" }, "priceRange": "60" },
    { "id": 5, "date": { "day": "06", "month": "june" }, "location": { "city": "assam", "country": "india", "adress": "riode janerio" }, "priceRange": "60" },
    { "id": 6, "date": { "day": "01", "month": "sep" }, "location": { "city": "arnac", "country": "india", "adress": "old delhi" }, "priceRange": "60" },
    { "id": 7, "date": { "day": "19", "month": "may" }, "location": { "city": "manipu", "country": "india", "adress": "negrulave" }, "priceRange": "60" }
  ];
  res.status(200).json(events);
}
