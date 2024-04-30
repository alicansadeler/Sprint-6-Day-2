# Gün Projesi: Gönderiler Component'inde Bug

Takım olarak çalışınca dikkatli olmak gerekiyor. Genelde projede yapabileceklerimiz belli izinlere bağlı oluyor. Ama bir şekilde takımında bir şeyler yanlış ayarlanmış. Ekibe yeni katılan bir stajyer bir yerde kodlarda hatalı bir değişiklik yapabilmiş. Bu yüzden de uygulama düzgün çalışmıyor.

Sorun gönderiler componentinde gibi duruyor.
Normalde, Gonderiler component'i gönderiler state'indeki array'i map'leyerek her item için Gonderi component'ini render ediyor.

Proplemi nasıl düzeltebilirsin?

- İpucu: \`.map()\` metoduna bakabilirsin
- İpucu: \`.map()\` yapınca oluşan element'e key atribute'u eklemeyi unutma. Uygulama hata vermez ama console'a hata basar.
