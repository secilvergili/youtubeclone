# youtubeclone

# Kütüphaneler
- react
- axios
- tailwindcss
- react-router-dom
- react-icons
- react-player
- millify


# Resources
- API: https://rapidapi.com/ytjar/api/yt-api

# Environment Variables

- Ortam değişkenleri, projede kullanılması gereken ama herkesle paylaşmak istemeyeceğimiz ve github a gönderilmesini engellemek isteyeceğimiz değişkenlerdir.
- Projeyi yeniden yayınlamaya ve kod değişikliği yapmaya gerek kalmadan bu değerleri değiştirebiliriz.
- (api key, veritabanı url, admin variables, project variables)
- Nasıl oluştururuz?
- Proje nin Ana dosya dizininde bir `.env` dosyası oluşturulur.
- `VITE_DEGISKEN_ISMI=degıskenindegeri` ifadesiyle .env değişkenlerine erişebiliriz.
- Proje içerisinde env de tutulan bir değişkene erişmek için `import.meta.env.DEGISKEN_ISMI`
- .env klasörünü .gitignore klasörüne ekleyerek github a gönderilmesini engelleriz.
- Daha sonra github üzerinden projeyi indirip başlatacak olan kişilere yardımcı olma amacıyla .env.example dosyası oluşturulup hangi değişkenlerin tanımlanması gerektiğini belirtebiliriz.
- .env.example dosyası oluşturularak dosyayı indirmek isteyenlere değişken için bilgi verilir.
- .env.example dosyasında:
- VITE_API_KEY=api-key-should-take-from-rapidapi
- şeklinde tanımlanır.
