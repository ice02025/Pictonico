// ===== i18n — English & Indonesian =====
const LANG={current:'en'};

const T={
  // ============ NAV / SHARED ============
  nav_home:{en:'Home',id:'Beranda'},
  nav_games:{en:'Mini Games',id:'Mini Game'},
  nav_tips:{en:'Photo Tips',id:'Tips Foto'},
  nav_lab:{en:'Photo Lab',id:'Lab Foto'},
  nav_cta:{en:'Download Now',id:'Unduh Sekarang'},
  site_title:{en:'Pictonico! Guide',id:'Panduan Pictonico!'},
  footer1:{en:'Pictonico! Guide · Community-driven unofficial resource · June 2026',id:'Panduan Pictonico! · Sumber komunitas tidak resmi · Juni 2026'},
  footer2:{en:'AI-generated images · Actual game content may vary · Nintendo trademarks belong to respective owners',id:'Gambar buatan AI · Konten game sebenarnya mungkin berbeda · Merek dagang Nintendo milik masing-masing pemilik'},

  // ============ HERO ============
  hero_subtitle:{en:'✦ Nintendo 2026 Original IP ✦',id:'✦ IP Original Nintendo 2026 ✦'},
  hero_h1_line1:{en:'Turn Photos Into',id:'Ubah Foto Menjadi'},
  hero_h1_em:{en:'Party Fun',id:'Pesta Seru'},
  hero_h1_line2:{en:'Nintendo New Hit',id:'Game Baru Nintendo'},
  hero_desc:{en:'Pictonico! uses photos from your phone — AI generates <strong style="color:var(--gold)">80</strong> hilarious mini-games in real-time. Feed the boss, walk the red carpet, dodge the boss monster… every photo is a new laugh.',id:'Pictonico! menggunakan foto dari ponsel Anda — AI menghasilkan <strong style="color:var(--gold)">80</strong> mini-game lucu secara real-time. Beri makan bos, berjalan di karpet merah, hindari monster bos… setiap foto adalah tawa baru.'},
  hero_stat1_val:{en:'80+',id:'80+'},
  hero_stat1_lbl:{en:'Mini Games',id:'Mini Game'},
  hero_stat2_val:{en:'¥50',id:'¥50'},
  hero_stat2_lbl:{en:'Full Version',id:'Versi Lengkap'},
  hero_stat3_val:{en:'iOS+Android',id:'iOS+Android'},
  hero_stat3_lbl:{en:'Dual Platform',id:'Dua Platform'},
  hero_btn1:{en:'🎮 Mini Game Gallery →',id:'🎮 Galeri Mini Game →'},
  hero_btn2:{en:'📷 Photo Lab →',id:'📷 Lab Foto →'},

  // ============ STATS BAR ============
  stat1_val:{en:'80+',id:'80+'},
  stat1_lbl:{en:'Mini Game Levels',id:'Level Mini Game'},
  stat2_val:{en:'2026.5.28',id:'2026.5.28'},
  stat2_lbl:{en:'Global Launch',id:'Peluncuran Global'},
  stat3_val:{en:'6',id:'6'},
  stat3_lbl:{en:'Categories',id:'Kategori'},
  stat4_val:{en:'4 Years',id:'4 Tahun'},
  stat4_lbl:{en:'1st Original IP',id:'IP Asli Pertama'},

  // ============ FEATURES ============
  feat_label:{en:'Why Pictonico!?',id:'Kenapa Pictonico!?'},
  feat_title:{en:'Why the <em>Whole World</em> is Playing?',id:'Kenapa <em>Seluruh Dunia</em> Bermain?'},
  feat_sub:{en:"Nintendo's first original IP mobile game in four years. Photos become gameplay. Parties become laughter.",id:'Game mobile IP asli pertama Nintendo dalam empat tahun. Foto jadi permainan. Pesta jadi tawa.'},
  feat1_title:{en:'Photos = Games',id:'Foto = Game'},
  feat1_desc:{en:'Pick any photo from your gallery — AI extracts faces and puts them in hilarious scenarios. Friends, family, even pets become game stars.',id:'Pilih foto apa pun dari galeri Anda — AI mengekstrak wajah dan menempatkannya dalam skenario lucu. Teman, keluarga, bahkan hewan peliharaan menjadi bintang game.'},
  feat2_title:{en:'Lightning-Fast Challenge',id:'Tantangan Kilat'},
  feat2_desc:{en:'Each mini-game lasts just seconds. Quick reflexes required. Like WarioWare style — tests your speed and reaction time.',id:'Setiap mini-game hanya berlangsung beberapa detik. Butuh refleks cepat. Seperti gaya WarioWare — menguji kecepatan dan waktu reaksi Anda.'},
  feat3_title:{en:'Ultimate Party Tool',id:'Alat Pesta Ultimate'},
  feat3_desc:{en:'Snap friends at the party → instant hilarious mini-games → take turns competing for scores. Maximum laughter guaranteed.',id:'Jepret teman di pesta → mini-game lucu instan → bergiliran bersaing untuk skor. Tawa maksimal dijamin.'},
  feat4_title:{en:'Infinite Freshness',id:'Kesegaran Tak Terbatas'},
  feat4_desc:{en:'Swap one photo = brand new game experience. Rotate selfies, group shots, funny faces — new surprises every time.',id:'Tukar satu foto = pengalaman game baru. Putar selfie, foto grup, wajah lucu — kejutan baru setiap kali.'},

  // ============ ABOUT ============
  about_label:{en:'Game Overview',id:'Ringkasan Game'},
  about_title:{en:'Turn <em>Embarrassing Photos</em> Into Art',id:'Ubah <em>Foto Memalukan</em> Jadi Seni'},
  about_desc:{en:"Pictonico! is Nintendo's bold new step in mobile gaming. It is Nintendo's first fully original IP mobile game since Dragalia Lost in 2018.",id:'Pictonico! adalah langkah baru Nintendo yang berani di game mobile. Ini adalah game mobile IP sepenuhnya asli pertama Nintendo sejak Dragalia Lost pada 2018.'},
  about_li1:{en:'80 unique mini-games',id:'80 mini-game unik'},
  about_li2:{en:'Real-time AI photo processing',id:'Pemrosesan foto AI real-time'},
  about_li3:{en:'WarioWare-style speed',id:'Kecepatan gaya WarioWare'},
  about_li4:{en:'Solo & Party modes',id:'Mode Solo & Pesta'},
  about_li5:{en:'Free download + in-app purchase',id:'Unduh gratis + pembelian dalam aplikasi'},
  about_li6:{en:'Continuous content updates',id:'Pembaruan konten berkelanjutan'},
  about_btn:{en:'Explore All Mini Games →',id:'Jelajahi Semua Mini Game →'},
  about_badge:{en:'Party Essential',id:'Wajib Pesta'},

  // ============ STEPS ============
  steps_label:{en:'Quick Start',id:'Mulai Cepat'},
  steps_title:{en:'Start the Party in <em>4 Steps</em>',id:'Mulai Pesta dalam <em>4 Langkah</em>'},
  steps_sub:{en:'From download to playing in just minutes.',id:'Dari unduh ke bermain hanya dalam beberapa menit.'},
  step1_title:{en:'Download',id:'Unduh'},
  step1_desc:{en:'Search "Pictonico!" on App Store / Google Play. Free download.',id:'Cari "Pictonico!" di App Store / Google Play. Unduh gratis.'},
  step2_title:{en:'Prepare Photos',id:'Siapkan Foto'},
  step2_desc:{en:'Pick clear front-facing photos from gallery. Live shots at parties work best.',id:'Pilih foto wajah depan yang jelas dari galeri. Jepretan langsung di pesta paling baik.'},
  step3_title:{en:'Start Playing',id:'Mulai Bermain'},
  step3_desc:{en:'Pick photo → auto-generate game → react fast → aim for high score! Each round lasts seconds.',id:'Pilih foto → buat game otomatis → reaksi cepat → incar skor tinggi! Setiap ronde hanya beberapa detik.'},
  step4_title:{en:'Unlock More',id:'Buka Lebih Banyak'},
  step4_desc:{en:'Buy full version to unlock all 80 mini-games. Two content packs ≈ ¥50 total.',id:'Beli versi lengkap untuk buka semua 80 mini-game. Dua paket konten ≈ ¥50 total.'},

  // ============ TIPS PAGE ============
  tips_title:{en:'Capture the <em>Funniest</em> Game Experience',id:'Tangkap Pengalaman Game <em>Paling Lucu</em>'},
  tips_sub:{en:'Quality photos = better face recognition + funnier game characters.',id:'Foto berkualitas = pengenalan wajah lebih baik + karakter game lebih lucu.'},
  tip1_title:{en:'☀️ Good Lighting is Key',id:'☀️ Pencahayaan Baik adalah Kunci'},
  tip1_desc:{en:'Shoot in natural or bright indoor light for the best AI face recognition. Backlit or dim photos may fail and look blurry.',id:'Ambil foto dalam cahaya alami atau dalam ruangan yang terang untuk pengenalan wajah AI terbaik. Foto dengan cahaya belakang atau redup mungkin gagal dan terlihat buram.'},
  tip1_do:{en:'✅ Natural window light',id:'✅ Cahaya jendela alami'},
  tip1_dont:{en:'❌ Backlit dark room',id:'❌ Ruangan gelap cahaya belakang'},
  tip2_title:{en:'😲 Exaggerated Expressions Win',id:'😲 Ekspresi Berlebihan Menang'},
  tip2_desc:{en:'Laugh out loud, open eyes wide, pout, make funny faces — the crazier the expression, the better the game character. Deadpan ID photos are the worst.',id:'Tertawa keras, buka mata lebar-lebar, manyun, buat wajah lucu — semakin gila ekspresinya, semakin bagus karakter gamenya. Foto KTP datar adalah yang terburuk.'},
  tip2_do:{en:'✅ Crazy laughing face',id:'✅ Wajah tertawa gila'},
  tip2_dont:{en:'❌ Stone-faced',id:'❌ Wajah datar'},
  tip3_title:{en:'👥 Group Photos Are Better',id:'👥 Foto Grup Lebih Baik'},
  tip3_desc:{en:'One party group photo = multiple game characters. Generate roles for all friends at once — taking turns competing is super fun.',id:'Satu foto grup pesta = beberapa karakter game. Hasilkan peran untuk semua teman sekaligus — bergiliran bersaing sangat menyenangkan.'},
  tip3_do:{en:'✅ 2-4 person group shots',id:'✅ Foto grup 2-4 orang'},
  tip3_dont:{en:'❌ Reusing the same photo',id:'❌ Menggunakan foto yang sama'},
  tip4_title:{en:'📱 Live Shots Surprise Most',id:'📱 Jepretan Langsung Paling Mengejutkan'},
  tip4_desc:{en:'Snap friends on the spot at parties → instant mini-game → the person being photographed is always the most shocked. Use burst mode for the funniest moments.',id:'Jepret teman langsung di pesta → mini-game instan → orang yang difoto selalu paling kaget. Gunakan mode burst untuk momen paling lucu.'},
  tip4_do:{en:'✅ Party live shots',id:'✅ Jepretan langsung pesta'},
  tip4_dont:{en:'❌ Downloaded internet pics',id:'❌ Foto unduhan internet'},
  tips_tag:{en:'Photo Guide',id:'Panduan Foto'},

  // ============ LAB PAGE ============
  lab_title:{en:'Upload Photo · <em>Instant Game Style</em>',id:'Unggah Foto · <em>Gaya Game Instan</em>'},
  lab_sub:{en:'Pick a photo, apply AI style filter + game UI overlay — preview how your photo looks inside Pictonico!',id:'Pilih foto, terapkan filter gaya AI + overlay UI game — pratinjau bagaimana foto Anda terlihat di dalam Pictonico!'},
  lab_tag:{en:'Photo Lab',id:'Lab Foto'},
  lab_upload_title:{en:'Click or Drag to Upload',id:'Klik atau Seret untuk Unggah'},
  lab_upload_desc:{en:'Supports JPG / PNG / WebP. Clear front-facing photos recommended.',id:'Mendukung JPG / PNG / WebP. Foto wajah depan yang jelas direkomendasikan.'},
  lab_loaded:{en:'Photo Loaded',id:'Foto Dimuat'},
  lab_reupload:{en:'Click to change photo',id:'Klik untuk ganti foto'},
  lab_scene_label:{en:'🎮 Choose Game Scene',id:'🎮 Pilih Adegan Game'},
  lab_scene_feed:{en:'🍔 Boss is Hungry — Feed!',id:'🍔 Bos Lapar — Beri Makan!'},
  lab_scene_carpet:{en:'🏃 Red Carpet Moment',id:'🏃 Momen Karpet Merah'},
  lab_scene_boss:{en:'🥊 Friend Turns Into Final BOSS',id:'🥊 Teman Berubah Jadi BOSS Terakhir'},
  lab_scene_clean:{en:'🧹 Erase Embarrassing Memory',id:'🧹 Hapus Kenangan Memalukan'},
  lab_scene_mummy:{en:'💄 Wrap Friend as a Mummy',id:'💄 Bungkus Teman Jadi Mumi'},
  lab_style_cartoon:{en:'🎨 Cartoon',id:'🎨 Kartun'},
  lab_style_retro:{en:'📺 Retro Pixel',id:'📺 Piksel Retro'},
  lab_style_vivid:{en:'🌈 Vivid Comic',id:'🌈 Komik Cerah'},
  lab_style_poster:{en:'🖼️ Poster Style',id:'🖼️ Gaya Poster'},
  lab_gen_btn:{en:'🎮 Generate Game Screen',id:'🎮 Hasilkan Layar Game'},
  lab_download:{en:'💾 Download Image',id:'💾 Unduh Gambar'},
  lab_reset:{en:'🔄 Upload Again',id:'🔄 Unggah Lagi'},
  lab_placeholder:{en:'Upload a photo and\nthe game preview will\nappear here',id:'Unggah foto dan\npratinjau game akan\nmuncul di sini'},
  lab_how_title:{en:'📋 How to Use',id:'📋 Cara Menggunakan'},
  lab_how_1:{en:'Click the upload area or drag a photo onto the zone above',id:'Klik area unggah atau seret foto ke zona di atas'},
  lab_how_2:{en:'Choose your desired game scene (Feed / Red Carpet / Boss Fight / Erase / Mummy)',id:'Pilih adegan game yang diinginkan (Beri Makan / Karpet Merah / Bos / Hapus / Mumi)'},
  lab_how_3:{en:'Select a filter style to give your photo that game-like feel',id:'Pilih gaya filter untuk memberi foto Anda nuansa seperti game'},
  lab_how_4:{en:'Click "Generate Game Screen" to see the result',id:'Klik "Hasilkan Layar Game" untuk melihat hasilnya'},
  lab_how_5:{en:'Satisfied? Click "Download Image" to save to your device',id:'Puas? Klik "Unduh Gambar" untuk menyimpan ke perangkat Anda'},
  lab_how_6:{en:'<strong>All processing is done locally in your browser. Photos never leave your device.</strong>',id:'<strong>Semua pemrosesan dilakukan secara lokal di browser Anda. Foto tidak pernah meninggalkan perangkat Anda.</strong>'},
  lab_game_title_feed:{en:'🍔 Boss Is Hungry! Feed Now',id:'🍔 Bos Lapar! Beri Makan'},
  lab_game_title_carpet:{en:'🏃 Red Carpet Moment',id:'🏃 Momen Karpet Merah'},
  lab_game_title_boss:{en:'🥊 Friend Became Final BOSS',id:'🥊 Teman Jadi BOSS Terakhir'},
  lab_game_title_clean:{en:'🧹 Erase Embarrassing Memory',id:'🧹 Hapus Kenangan Memalukan'},
  lab_game_title_mummy:{en:'💄 Wrap Friend as Mummy',id:'💄 Bungkus Teman Jadi Mumi'},
  lab_hint_feed:{en:'👆 Tap fast to feed',id:'👆 Ketuk cepat untuk memberi makan'},
  lab_hint_carpet:{en:'👈👉 Swipe to control pace',id:'👈👉 Geser untuk kontrol langkah'},
  lab_hint_boss:{en:'👆 Tap to dodge · Hold to attack',id:'👆 Ketuk untuk menghindar · Tahan untuk menyerang'},
  lab_hint_clean:{en:'👆 Rub the screen hard',id:'👆 Gosok layar dengan keras'},
  lab_hint_mummy:{en:'🔄 Swipe fast to wrap bandages',id:'🔄 Geser cepat untuk membungkus perban'},
  lab_img_downloaded:{en:'game-style.png',id:'gaya-game.png'},
  lab_timer:{en:'⏱ 00:03',id:'⏱ 00:03'},
  lab_score:{en:'★ 1,250',id:'★ 1,250'},

  // ============ MINIGAMES PAGE ============
  mg_hero_title:{en:'Hilariously Creative <em>Mini Games</em>',id:'<em>Mini Game</em> yang Kreatif dan Lucu'},
  mg_hero_sub:{en:'12 confirmed mini-game scenarios explained in detail. Every photo creates a unique experience. More levels coming soon.',id:'12 skenario mini-game yang dikonfirmasi dijelaskan secara detail. Setiap foto menciptakan pengalaman unik. Lebih banyak level segera hadir.'},
  mg_tag:{en:'Mini-Game Gallery',id:'Galeri Mini-Game'},

  // Mini Game 01
  mg01_title:{en:'🏃 Red Carpet Moment',id:'🏃 Momen Karpet Merah'},
  mg01_cat:{en:'Action',id:'Aksi'},
  mg01_desc1:{en:'The two most popular kids from sports day are strutting down the red carpet, cameras flashing. You need to precisely control their walking rhythm — too fast and they trip, too slow and they look timid.',id:'Dua anak paling populer dari hari olahraga berjalan di karpet merah, kamera berkedip. Anda perlu mengontrol ritme berjalan mereka dengan tepat — terlalu cepat mereka tersandung, terlalu lambat mereka terlihat malu-malu.'},
  mg01_desc2:{en:'The best strategy is to maintain a steady pace between steps, watching the rhythm indicator rings on both sides of the screen. Tap when the ring shrinks to its smallest for a perfect step. Consecutive perfect steps trigger "Superstar" mode for double points. But if you fall, not only does your score reset — the slow-motion replay of your fall becomes the biggest laugh at the party!',id:'Strategi terbaik adalah menjaga kecepatan stabil di antara langkah, perhatikan indikator ritme di kedua sisi layar. Ketuk saat cincin menyusut ke ukuran terkecil untuk langkah sempurna. Langkah sempurna berturut-turut memicu mode "Superstar" untuk poin ganda. Tapi jika Anda jatuh, tidak hanya skor Anda direset — replay gerak lambat dari kejatuhan Anda menjadi tawa terbesar di pesta!'},
  mg01_diff:{en:'Difficulty: ★★☆☆',id:'Kesulitan: ★★☆☆'},
  mg01_ctrl:{en:'Control: Swipe left/right',id:'Kontrol: Geser kiri/kanan'},
  mg01_time:{en:'Duration: ~5 sec',id:'Durasi: ~5 detik'},
  mg01_laugh:{en:'Laugh: Fall slow-mo',id:'Tawa: Jatuh lambat'},

  // Mini Game 02
  mg02_title:{en:'🍔 Boss is Hungry — Feed!',id:'🍔 Bos Lapar — Beri Makan!'},
  mg02_cat:{en:'Feeding',id:'Memberi Makan'},
  mg02_desc1:{en:'Your growling-stomach boss is waiting with his mouth wide open. Various foods — burgers, pizza, sushi, even a whole roast chicken — fly in from the edges. Your job is to precisely stuff them into his mouth.',id:'Bos Anda yang perut keroncongan menunggu dengan mulut terbuka lebar. Berbagai makanan — burger, pizza, sushi, bahkan ayam panggang utuh — terbang dari tepi layar. Tugas Anda adalah memasukkan semuanya dengan tepat ke mulutnya.'},
  mg02_desc2:{en:'But watch out! Some foods the boss hates will sneak in: green peppers, cilantro, natto… feed him wrong three times and he erupts in rage. At higher levels food flies faster, sometimes three items at once — you need lightning judgment. Fill him up and he gives a satisfied smile — possibly the only time you see your boss smile today.',id:'Tapi hati-hati! Beberapa makanan yang dibenci bos akan menyelinap masuk: paprika hijau, daun ketumbar, natto… beri dia makan salah tiga kali dan dia meledak marah. Di level lebih tinggi makanan terbang lebih cepat, kadang tiga item sekaligus — Anda butuh penilaian kilat. Penuhi dia dan dia memberi senyum puas — mungkin satu-satunya kali Anda melihat bos Anda tersenyum hari ini.'},
  mg02_diff:{en:'Difficulty: ★★★☆',id:'Kesulitan: ★★★☆'},
  mg02_ctrl:{en:'Control: Quick tap',id:'Kontrol: Ketuk cepat'},
  mg02_time:{en:'Duration: ~7 sec',id:'Durasi: ~7 detik'},
  mg02_laugh:{en:'Laugh: Wrong food',id:'Tawa: Makanan salah'},

  // Mini Game 03
  mg03_title:{en:'🧹 Erase Embarrassing High School Memories',id:'🧹 Hapus Kenangan SMA yang Memalukan'},
  mg03_cat:{en:'Cleaning',id:'Membersihkan'},
  mg03_desc1:{en:'Those cringeworthy old photos — the terrible hairstyles, the embarrassing signatures, the awful filters — are floating up on screen one by one. Your mission: scrub them away with all your might!',id:'Foto-foto lama yang memalukan itu — gaya rambut mengerikan, tanda tangan memalukan, filter jelek — muncul di layar satu per satu. Misi Anda: gosok semuanya dengan sekuat tenaga!'},
  mg03_desc2:{en:'Swipe hard and fast on the screen — photos fade away like being erased by a giant eraser. Some "stubborn memories" need repeated scrubbing — a "residue meter" shows your progress. The harder you scrub, the higher your score. If you completely erase a photo in the final second, you trigger a "Total Amnesia" perfect rating. Perfect for school reunion parties — see who most wants to erase their past self.',id:'Geser keras dan cepat di layar — foto memudar seperti dihapus oleh penghapus raksasa. Beberapa "kenangan membandel" perlu digosok berulang kali — "meteran residu" menunjukkan kemajuan Anda. Semakin keras Anda menggosok, semakin tinggi skor Anda. Jika Anda benar-benar menghapus foto di detik terakhir, Anda memicu peringkat sempurna "Amnesia Total". Sempurna untuk pesta reuni sekolah — lihat siapa yang paling ingin menghapus diri masa lalunya.'},
  mg03_diff:{en:'Difficulty: ★★☆☆',id:'Kesulitan: ★★☆☆'},
  mg03_ctrl:{en:'Control: Fast swipe',id:'Kontrol: Geser cepat'},
  mg03_time:{en:'Duration: ~6 sec',id:'Durasi: ~6 detik'},
  mg03_laugh:{en:'Laugh: Memory popup',id:'Tawa: Popup kenangan'},

  // Mini Game 04
  mg04_title:{en:'🤐 Zip Up the Kid',id:'🤐 Ritsleting Mulut Anak'},
  mg04_cat:{en:'Dress-Up',id:'Berdandan'},
  mg04_desc1:{en:'The noisy kid just won\'t calm down? No worries — install a zipper on his mouth! A zipper pull appears on the left side of the screen — hold it with your finger and drag all the way to the right to seal that chattering mouth shut.',id:'Anak berisik tidak mau tenang? Jangan khawatir — pasang ritsleting di mulutnya! Tarikan ritsleting muncul di sisi kiri layar — tahan dengan jari Anda dan seret ke kanan untuk menutup mulut yang cerewet itu.'},
  mg04_desc2:{en:'Pressure is everything: too light and the zipper slides back open halfway; too heavy and the zipper "snaps" — the kid laughs even harder. A pressure gauge above shows your sweet spot — keep it in the green zone for the smoothest zip. Once sealed, the kid stares wide-eyed in disbelief — the expression alone is worth it. Zipper length and position auto-adjust based on the face in your photo — every experience is unique.',id:'Tekanan adalah segalanya: terlalu ringan dan ritsleting terbuka kembali setengah jalan; terlalu berat dan ritsleting "patah" — anak itu malah tertawa lebih keras. Pengukur tekanan di atas menunjukkan titik ideal Anda — jaga di zona hijau untuk ritsleting paling mulus. Setelah disegel, anak itu menatap dengan mata terbelalak tak percaya — ekspresinya saja sudah sepadan. Panjang dan posisi ritsleting menyesuaikan otomatis berdasarkan wajah di foto Anda — setiap pengalaman unik.'},
  mg04_diff:{en:'Difficulty: ★★★☆',id:'Kesulitan: ★★★☆'},
  mg04_ctrl:{en:'Control: Precise drag',id:'Kontrol: Seret tepat'},
  mg04_time:{en:'Duration: ~8 sec',id:'Durasi: ~8 detik'},
  mg04_laugh:{en:'Laugh: Zipper snap',id:'Tawa: Ritsleting patah'},

  // Mini Game 05
  mg05_title:{en:'🪂 Skydive High-Five',id:'🪂 Tos Terjun Payung'},
  mg05_cat:{en:'Action',id:'Aksi'},
  mg05_desc1:{en:'At ten thousand meters, two old friends jump out of the plane and unexpectedly meet mid-air! Against a blue sky and white clouds, they plunge at high speed — your job is to steer them together for an epic high-five.',id:'Di ketinggian sepuluh ribu meter, dua teman lama melompat dari pesawat dan tak terduga bertemu di udara! Dengan latar langit biru dan awan putih, mereka terjun dengan kecepatan tinggi — tugas Anda adalah mengarahkan mereka bersama untuk tos epik.'},
  mg05_desc2:{en:'Tilt your phone to steer the dive direction, making micro-adjustments to dodge sudden flocks of birds and drifting hot air balloons. The distance indicator shows how many meters remain before your hands touch. In the final 5 meters, precision is crucial — miss by a little and you sail past each other, waving goodbye in regret. Success triggers a slow-motion close-up with fireworks effects — one of the coolest moments in the entire mini-game catalog.',id:'Miringkan ponsel Anda untuk mengarahkan arah menyelam, membuat penyesuaian mikro untuk menghindari kawanan burung tiba-tiba dan balon udara yang melayang. Indikator jarak menunjukkan berapa meter tersisa sebelum tangan Anda bersentuhan. Dalam 5 meter terakhir, presisi sangat penting — meleset sedikit dan Anda melewati satu sama lain, melambaikan tangan dengan menyesal. Keberhasilan memicu close-up gerak lambat dengan efek kembang api — salah satu momen paling keren di seluruh katalog mini-game.'},
  mg05_diff:{en:'Difficulty: ★★★★',id:'Kesulitan: ★★★★'},
  mg05_ctrl:{en:'Control: Tilt phone',id:'Kontrol: Miringkan ponsel'},
  mg05_time:{en:'Duration: ~6 sec',id:'Durasi: ~6 detik'},
  mg05_laugh:{en:'Laugh: Sailing past',id:'Tawa: Melewati'},

  // Mini Game 06
  mg06_title:{en:'🩰 Grandpa\'s Ballet Tutu',id:'🩰 Rok Balet Kakek'},
  mg06_cat:{en:'Dress-Up',id:'Berdandan'},
  mg06_desc1:{en:'Who would have guessed — your always-serious grandpa is suddenly wearing a pink ballet tutu, striking a pose on stage! Your task: fluff up his skirt, adjust the bow position, then match the music rhythm for a graceful spin.',id:'Siapa yang menduga — kakek Anda yang selalu serius tiba-tiba memakai rok balet merah muda, berpose di atas panggung! Tugas Anda: kembangkan roknya, sesuaikan posisi pita, lalu cocokkan ritme musik untuk putaran anggun.'},
  mg06_desc2:{en:'Draw circles with your fingertip around the skirt to arrange the ruffles. Long-press the bow and drag it to the correct spot. Once everything is set, follow the Swan Lake melody — tap three times in rhythm and Grandpa nails a stunning pirouette. But the music speeds up, then suddenly changes tempo just to trip you up. A perfect performance triggers "Bravo!" cheers and a shower of rose petals — the comedic highlight of any family gathering.',id:'Gambar lingkaran dengan ujung jari Anda di sekitar rok untuk mengatur kerutan. Tekan lama pita dan seret ke posisi yang benar. Setelah semuanya siap, ikuti melodi Swan Lake — ketuk tiga kali dalam ritme dan Kakek melakukan pirouette yang menakjubkan. Tapi musik semakin cepat, lalu tiba-tiba berubah tempo hanya untuk membuat Anda kacau. Pertunjukan sempurna memicu sorakan "Bravo!" dan hujan kelopak mawar — sorotan komedi dari setiap pertemuan keluarga.'},
  mg06_diff:{en:'Difficulty: ★★★☆',id:'Kesulitan: ★★★☆'},
  mg06_ctrl:{en:'Control: Circle + tap',id:'Kontrol: Lingkaran + ketuk'},
  mg06_time:{en:'Duration: ~10 sec',id:'Durasi: ~10 detik'},
  mg06_laugh:{en:'Laugh: Tempo change',id:'Tawa: Perubahan tempo'},

  // Mini Game 07
  mg07_title:{en:'✂️ Pluck Mom\'s Nose Hair',id:'✂️ Cabut Bulu Hidung Ibu'},
  mg07_cat:{en:'Cleaning',id:'Membersihkan'},
  mg07_desc1:{en:'Mom is standing there, hands on her hips, furious — but that single nose hair poking out of her nostril is impossible to ignore. Today, it MUST be dealt with! A targeting reticle appears — your finger is the tweezers.',id:'Ibu berdiri di sana, tangan di pinggul, marah — tapi bulu hidung yang mencuat dari lubang hidungnya tidak mungkin diabaikan. Hari ini, itu HARUS ditangani! Sebuah reticle penargetan muncul — jari Anda adalah pinsetnya.'},
  mg07_desc2:{en:'Mom\'s face keeps shaking side to side (because she\'s still angry). You need to predict her movement and tap precisely when the reticle overlaps the nose hair. Miss — and poke her nose instead — and she gets angrier, shaking harder. Three consecutive misses trigger "Rage Mode" — the screen shakes and the reticle shrinks. Success sends the nose hair flying dramatically across the screen, and Mom\'s expression instantly shifts from fury to shock. That contrast is priceless.',id:'Wajah Ibu terus bergoyang ke kiri dan kanan (karena dia masih marah). Anda perlu memprediksi gerakannya dan mengetuk tepat saat reticle tumpang tindih dengan bulu hidung. Meleset — dan malah menusuk hidungnya — dan dia semakin marah, bergoyang lebih keras. Tiga kali meleset berturut-turut memicu "Mode Marah" — layar bergetar dan reticle mengecil. Keberhasilan membuat bulu hidung terbang dramatis melintasi layar, dan ekspresi Ibu langsung berubah dari kemarahan menjadi keterkejutan. Kontras itu tak ternilai harganya.'},
  mg07_diff:{en:'Difficulty: ★★★★',id:'Kesulitan: ★★★★'},
  mg07_ctrl:{en:'Control: Precise tap',id:'Kontrol: Ketuk tepat'},
  mg07_time:{en:'Duration: ~5 sec',id:'Durasi: ~5 detik'},
  mg07_laugh:{en:'Laugh: Rage mode',id:'Tawa: Mode marah'},

  // Mini Game 08
  mg08_title:{en:'🎭 Dad\'s Classic Face Mask',id:'🎭 Masker Wajah Klasik Ayah'},
  mg08_cat:{en:'Expression',id:'Ekspresi'},
  mg08_desc1:{en:'Dad is doing that classic expression again — squinting eyes, sly smile, as if he knows everything. But wait… what\'s on his face? Cucumber slices? A face mask? Some mysterious substance? Turns out Dad is doing a home spa day!',id:'Ayah melakukan ekspresi klasik itu lagi — mata menyipit, senyum licik, seolah dia tahu segalanya. Tapi tunggu… apa yang ada di wajahnya? Irisan mentimun? Masker wajah? Zat misterius? Ternyata Ayah sedang melakukan spa di rumah!'},
  mg08_desc2:{en:'Your job: quickly peel off each cucumber slice or mask sheet from Dad\'s face. But if you peel the wrong spot — like mistaking an eyebrow for a mask — Dad\'s face instantly twists into a grimace of pain. Every correctly peeled piece reveals a funny face doodle underneath (randomly generated: ninja face marks, clown nose, cat whiskers, etc.). The last few pieces are deliberately placed in tricky spots. Just don\'t peel off the real eyebrows!',id:'Tugas Anda: cepat lepaskan setiap irisan mentimun atau lembar masker dari wajah Ayah. Tapi jika Anda mengelupas tempat yang salah — seperti salah mengira alis sebagai masker — wajah Ayah langsung berubah menjadi seringai kesakitan. Setiap potongan yang terkelupas dengan benar mengungkapkan coretan wajah lucu di bawahnya (dihasilkan secara acak: tanda wajah ninja, hidung badut, kumis kucing, dll.). Potongan terakhir sengaja ditempatkan di tempat yang sulit. Hanya saja, jangan mengelupas alis asli!'},
  mg08_diff:{en:'Difficulty: ★★☆☆',id:'Kesulitan: ★★☆☆'},
  mg08_ctrl:{en:'Control: Tap to peel',id:'Kontrol: Ketuk untuk mengelupas'},
  mg08_time:{en:'Duration: ~7 sec',id:'Durasi: ~7 detik'},
  mg08_laugh:{en:'Laugh: Wrong eyebrow',id:'Tawa: Alis salah'},

  // Mini Game 09
  mg09_title:{en:'🥊 Best Friend Becomes Final BOSS',id:'🥊 Sahabat Jadi BOSS Terakhir'},
  mg09_cat:{en:'Combat',id:'Pertarungan'},
  mg09_desc1:{en:'Your best friend suddenly sprouts a health bar and a boss title above their head — "Ultimate Friendship Destroyer" or "Bestie Obliterator." Looks like the friendship boat has capsized — you\'ve entered BOSS BATTLE MODE!',id:'Sahabat Anda tiba-tiba menumbuhkan bar kesehatan dan gelar bos di atas kepala mereka — "Penghancur Persahabatan Ultimate" atau "Pemusnah Sahabat." Sepertinya perahu persahabatan telah terbalik — Anda telah memasuki MODE PERTARUNGAN BOS!'},
  mg09_desc2:{en:'The BOSS attacks with eye lasers, mouth flames, or summoning a rain of emoji. Dodge by swiping left and right, while watching for the boss\'s "stun window" — a brief pause after each attack where you can tap their face to counter. Three consecutive hits fill the "Friendship Ultimate" gauge — hold to unleash a super move: your character pulls out absurd weapons (inflatable hammer, water gun, pillow) to beat the BOSS back to normal. After defeat, your friend returns to normal and asks in confusion: "What just happened?"',id:'BOS menyerang dengan laser mata, api mulut, atau memanggil hujan emoji. Hindari dengan menggeser kiri dan kanan, sambil mengamati "jendela setrum" bos — jeda singkat setelah setiap serangan di mana Anda dapat mengetuk wajah mereka untuk membalas. Tiga pukulan berturut-turut mengisi pengukur "Persahabatan Ultimate" — tahan untuk melepaskan gerakan super: karakter Anda mengeluarkan senjata absurd (palu tiup, pistol air, bantal) untuk mengalahkan BOS kembali normal. Setelah kekalahan, teman Anda kembali normal dan bertanya dengan bingung: "Apa yang baru saja terjadi?"'},
  mg09_diff:{en:'Difficulty: ★★★★★',id:'Kesulitan: ★★★★★'},
  mg09_ctrl:{en:'Control: Swipe + tap',id:'Kontrol: Geser + ketuk'},
  mg09_time:{en:'Duration: ~12 sec',id:'Durasi: ~12 detik'},
  mg09_laugh:{en:'Laugh: Inflatable hammer',id:'Tawa: Palu tiup'},

  // Mini Game 10
  mg10_title:{en:'💪 The Teacher Is a Bodybuilder',id:'💪 Guru Itu Binaragawan'},
  mg10_cat:{en:'Action',id:'Aksi'},
  mg10_desc1:{en:'The always-stoic, never-emotional homeroom teacher suddenly removes his suit jacket — OH MY GOD, hiding underneath is a ripped bodybuilder physique! Biceps, eight-pack abs, broad back… the visual impact is overwhelming.',id:'Guru wali kelas yang selalu tabah, tidak pernah emosional tiba-tiba melepas jaketnya — YA TUHAN, tersembunyi di bawahnya adalah fisik binaragawan yang kekar! Bisep, perut eight-pack, punggung lebar… dampak visualnya luar biasa.'},
  mg10_desc2:{en:'The teacher starts doing bodybuilding poses — front double biceps, side chest, back lat spread — and YOU need to match his moves with your facial expressions. Expression prompts appear: shocked, impressed, terrified, laughing uncontrollably… Your photo\'s face auto-detects facial features and morphs your mouth and eyes to match. If you can\'t keep up with the teacher\'s pace, your expression freezes from the last pose — one second you\'re staring in awe, the next he\'s switched to an elegant bodybuilding turn while your dumbstruck face makes it ten times funnier.',id:'Guru mulai melakukan pose binaraga — bisep ganda depan, dada samping, punggung lat spread — dan ANDA harus mencocokkan gerakannya dengan ekspresi wajah Anda. Prompt ekspresi muncul: terkejut, terkesan, takut, tertawa tak terkendali… Wajah foto Anda otomatis mendeteksi fitur wajah dan mengubah mulut dan mata Anda agar cocok. Jika Anda tidak bisa mengikuti kecepatan guru, ekspresi Anda membeku dari pose terakhir — satu detik Anda menatap kagum, detik berikutnya dia beralih ke putaran binaraga yang elegan sementara wajah tercengang Anda membuatnya sepuluh kali lebih lucu.'},
  mg10_diff:{en:'Difficulty: ★★★☆',id:'Kesulitan: ★★★☆'},
  mg10_ctrl:{en:'Control: Expression match',id:'Kontrol: Cocokkan ekspresi'},
  mg10_time:{en:'Duration: ~9 sec',id:'Durasi: ~9 detik'},
  mg10_laugh:{en:'Laugh: Frozen face',id:'Tawa: Wajah beku'},

  // Mini Game 11
  mg11_title:{en:'🧻 Wrap Friend as a Mummy',id:'🧻 Bungkus Teman Jadi Mumi'},
  mg11_cat:{en:'Dress-Up',id:'Berdandan'},
  mg11_desc1:{en:'Rolls of white bandages descend from the sky onto your friend. Your mission: starting from the feet, rapidly swirl your finger to wrap the bandages — today you\'ll turn this poor soul into a genuine mummy!',id:'Gulungan perban putih turun dari langit ke teman Anda. Misi Anda: mulai dari kaki, putar jari Anda dengan cepat untuk membungkus perban — hari ini Anda akan mengubah jiwa malang ini menjadi mumi sungguhan!'},
  mg11_desc2:{en:'Bandages auto-land along the person\'s body contour in the photo — you just need to trace circles along the outline to tighten them. Wrap too loose — the mummy "collapses," bandages slide off, start over. Wrap too tight — your friend\'s eyes pop out a "SOS" signal and the bandages snap. Each perfect loop earns an "Archaeologist Approved" rating. In the end, only two eyes peek out with a panicked expression — screenshot this for today\'s best meme. After wrapping, the mummy does a clumsy little hop — a hidden easter egg.',id:'Perban otomatis mendarat di sepanjang kontur tubuh orang di foto — Anda hanya perlu menggambar lingkaran di sepanjang garis untuk mengencangkannya. Bungkus terlalu longgar — mumi "runtuh," perban meluncur, mulai ulang. Bungkus terlalu ketat — mata teman Anda mengeluarkan sinyal "SOS" dan perban patah. Setiap putaran sempurna mendapat peringkat "Disetujui Arkeolog." Pada akhirnya, hanya dua mata yang mengintip dengan ekspresi panik — tangkapan layar ini untuk meme terbaik hari ini. Setelah membungkus, mumi melakukan lompatan kecil yang canggung — telur paskah tersembunyi.'},
  mg11_diff:{en:'Difficulty: ★★★☆',id:'Kesulitan: ★★★☆'},
  mg11_ctrl:{en:'Control: Fast circle draw',id:'Kontrol: Gambar lingkaran cepat'},
  mg11_time:{en:'Duration: ~10 sec',id:'Durasi: ~10 detik'},
  mg11_laugh:{en:'Laugh: Only eyes showing',id:'Tawa: Hanya mata terlihat'},

  // Mini Game 12
  mg12_title:{en:'🍕 Big Mouth Eating Challenge',id:'🍕 Tantangan Makan Mulut Besar'},
  mg12_cat:{en:'Feeding',id:'Memberi Makan'},
  mg12_desc1:{en:'The character\'s mouth is magnified 3x, gaping like a black hole. A food conveyor belt above endlessly delivers delicacies — starting with dumplings and sushi, then a whole roast turkey, and finally a three-tier wedding cake comes rolling in.',id:'Mulut karakter diperbesar 3x, menganga seperti lubang hitam. Sabuk konveyor makanan di atas tanpa henti mengirimkan makanan lezat — dimulai dengan pangsit dan sushi, lalu kalkun panggang utuh, dan akhirnya kue pernikahan tiga tingkat masuk bergulir.'},
  mg12_desc2:{en:'Tap rapidly to flick each food item into the mouth — but every food has a different size, shape, and trajectory. Dumplings bounce fast, the turkey is heavy and drops quickly, the cake splits into three layers. Even worse, weird items sneak in: a shoe, a soccer ball, a dictionary… eating the wrong thing triggers a "choking" animation and pauses your score. The conveyor accelerates into chaos mode — turkey and cake arrive simultaneously, plus a dictionary and a pineapple — the frantic feeling is a real eating contest simulator. The final calorie count, always absurdly high, is a punchline in itself.',id:'Ketuk cepat untuk melemparkan setiap makanan ke mulut — tapi setiap makanan memiliki ukuran, bentuk, dan lintasan yang berbeda. Pangsit memantul cepat, kalkun berat dan jatuh cepat, kue terbelah menjadi tiga lapisan. Lebih buruk lagi, barang aneh menyelinap masuk: sepatu, bola sepak, kamus… makan barang yang salah memicu animasi "tersedak" dan menjeda skor Anda. Konveyor berakselerasi ke mode kekacauan — kalkun dan kue tiba bersamaan, ditambah kamus dan nanas — perasaan panik adalah simulator kontes makan sungguhan. Hitungan kalori akhir, selalu sangat tinggi, adalah punchline tersendiri.'},
  mg12_diff:{en:'Difficulty: ★★★★',id:'Kesulitan: ★★★★'},
  mg12_ctrl:{en:'Control: Tap frenzy',id:'Kontrol: Ketuk gila'},
  mg12_time:{en:'Duration: ~10 sec',id:'Durasi: ~10 detik'},
  mg12_laugh:{en:'Laugh: Eating a dictionary',id:'Tawa: Makan kamus'},

  // ============ TIPS PAGE ============
  tips_hero_title:{en:'Capture the <em>Funniest</em> Game Experience',id:'Tangkap Pengalaman Game <em>Paling Lucu</em>'},
  tips_hero_sub:{en:'Quality photos = better face recognition + funnier game characters',id:'Foto berkualitas = pengenalan wajah lebih baik + karakter game lebih lucu'},
  tips_hero_tag:{en:'Photo Guide',id:'Panduan Foto'},
};

// ===== INIT =====
function t(key){
  if(!T[key])return key;
  return T[key][LANG.current]||T[key].en||key;
}

function setLang(lang){
  LANG.current=lang;
  localStorage.setItem('ptcgp-lang',lang);
  document.documentElement.lang=lang;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('on',b.dataset.lang===lang));
  applyTranslations();
}

function applyTranslations(){
  document.querySelectorAll('[data-t]').forEach(el=>{
    const key=el.dataset.t;
    if(el.tagName==='INPUT'&&el.type==='placeholder'){el.placeholder=t(key)}
    else{el.innerHTML=t(key)}
  });
  document.querySelectorAll('[data-t-attr]').forEach(el=>{
    const parts=el.dataset.tAttr.split(':');
    el.setAttribute(parts[0],t(parts[1]));
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  const saved=localStorage.getItem('ptcgp-lang')||'en';
  setLang(saved);
});

document.addEventListener('click',e=>{
  if(e.target.classList.contains('lang-btn')){
    setLang(e.target.dataset.lang);
  }
});
