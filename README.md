# smart-test-recommendation

An AI-based tool that reads code changes from Git and provides test case recommendations automatically

## Cara Pakai

```bash
npm install
npx smart-recommender
```

## Konfigurasi
Tambahkan file `.env` berisi:

```
OPENROUTER_API_KEY=your_api_key_here
OPENROUTER_API_URL=your_api_url_here
```

## Fitur
- Menganalisa perubahan kode dari Git diff
- Mengidentifikasi fungsi yang berubah
- Memberikan rekomendasi test case menggunakan AI
- Mendukung JavaScript/Node.js

## Output
Tool akan menampilkan:
- Rekomendasi test case berdasarkan perubahan kode
- Pesan error jika terjadi masalah

## Requirements
- Node.js
- Git repository
- OpenRouter API key dan URL
