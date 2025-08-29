document.addEventListener('DOMContentLoaded', function() {
    // --- データ定義 ---
    const boothData = {
        classes: [
            { id: 'c21', category: 'class', name: { ja: '2年1組', en: 'Class 2-1' }, content: { ja: 'トイストーリーマニア21', en: 'Toy Story Mania 21' }, description: { ja: '完全非公式、某夢の国に雰囲気だけ寄せたシューティングゲーム。難易度本家超え、豪華景品あり！狙うは的と、担任のSmile。', en: 'An unofficial shooting game with a dream-like atmosphere. Harder than the original, with great prizes! Aim for the target and our teacher\'s smile.' }, location: { ja: '2-4教室', en: 'Room 2-4' } },
            { id: 'c22', category: 'class', name: { ja: '2年2組', en: 'Class 2-2' }, content: { ja: 'カジノ', en: 'Casino' }, description: { ja: '運否天賦、貴方の運はどこまで通じるか、賞品を狙って試してみよう。日常に別れをつけ、ただでしか味わえない非日常があなたを待っています！※このカジノは合法です。', en: 'Test your luck and aim for prizes. A unique experience awaits you! *This casino is legal.' }, location: { ja: '2-2教室', en: 'Room 2-2' } },
            { id: 'c23', category: 'class', name: { ja: '2年3組', en: 'Class 2-3' }, content: { ja: '私とチキンとチャイナ服と', en: 'Me, Chicken, and a Chinese Clothes' }, description: { ja: '２の３では逃走中風スタンプラリーと鬼滅の刃風気配切りを行います。一般公開2日前に2つの企画を行うという狂気的な決定を下すのは長い山東祭の歴史の中でおそらく最初で最後。やってみるとそこそこ楽しいと思うので迷ったらとりま２の３に来てね^^', en: 'In Class 2-3, we\'re holding an \'Escape Game\'-style stamp rally and a \'Demon Slayer\'-style presence-sensing sword game. Making the insane decision to run two events just two days before the public opening is probably a first and last in the long history of the Yamato Festival. We think you\'ll find it pretty fun, so if you\'re not sure where to go, come to Class 2-3! ^^' }, location: { ja: '2-3教室', en: 'Room 2-3' } },
            { id: 'c24', category: 'class', name: { ja: '2年4組', en: 'Class 2-4' }, content: { ja: 'どきどき♡だっしゅつげーむ', en: 'Thrilling ♡ Escape Game' }, description: { ja: 'もえもえきゅん♡メイド喫茶の鍵があかない！？ご主人様、私たちを助けて〜！', en: 'The key to the maid cafe is lost!? Master, please help us!' }, location: { ja: '2-1教室', en: 'Room 2-1' } },
            { id: 'c25', category: 'class', name: { ja: '2年5組', en: 'Class 2-5' }, content: { ja: '山東謎の陣', en: 'Mysterious Camp in Yamato' }, description: { ja: '待ち時間で遊びたい友達とはしゃぎたいこれら全てを叶える方法があります。そう、謎解きをすることです！山東祭を楽しみたい皆様やってるんですか、謎解きしてください！', en: 'Want to have fun with friends while you wait? Then solve our puzzles! Everyone, please come and challenge our mystery!' }, location: { ja: '2-5教室', en: 'Room 2-5' } },
            { id: 'c26', category: 'class', name: { ja: '2年6組', en: 'Class 2-6' }, content: { ja: 'ROUND6', en: 'ROUND6' }, description: { ja: 'All the fun with this class. 山東祭にくる人々へ笑顔と健康とコミュニケーションの場を提供し続けることが私たちの理念です。楽しさの全てはこのクラスとともに。', en: 'Our philosophy is to provide smiles, health, and a place for communication. All the fun is with this class.' }, location: { ja: '1-1教室 & ゼミ1', en: 'Room 1-1 & Seminar 1' } },
            { id: 'c31', category: 'class', name: { ja: '3年1組', en: 'Class 3-1' }, content: { ja: 'cafe-ゆい。', en: 'cafe-Yui.' }, description: { ja: 'クロワッサンを潰して焼くという、背教的ですらあるその発想は世の中をひっくり返すような危険思想かもしれない。しかし、だからこそ、どうしようもなく魅力的なのだ。', en: 'The idea of crushing and baking a croissant may be a dangerous thought that could turn the world upside down. But that\'s precisely why it\'s so irresistibly charming.' }, location: { ja: '1-2教室', en: 'Room 1-2' } },
            { id: 'c32', category: 'class', name: { ja: '3年2組', en: 'Class 3-2' }, content: { ja: 'Route 32 Diner', en: 'Route 32 Diner' }, description: { ja: '本場アメリカの雰囲気を再現したダイナーが登場！ジューシーなバーガーやきらめくゼリーで、文化祭の思い出に最高の一皿を！', en: 'A diner that recreates an authentic American atmosphere! Enjoy juicy burgers and sparkling jelly for the best festival memories!' }, location: { ja: '1-3教室', en: 'Room 1-3' } },
            { id: 'c33', category: 'class', name: { ja: '3年3組', en: 'Class 3-3' }, content: { ja: '真夏のぶっ濃いメイド', en: 'Midsummer\'s Scorching Maid' }, description: { ja: 'おかえりなさいませ、ご主人様♡ 3年3組の名物の焼きそばは、ぶっ濃い脂汗が隠し味♡(衛生面には配慮してます) ギャップ萌え必至の非日常体験、召し上がれ！', en: 'Welcome home, Master♡ Our famous yakisoba has a secret ingredient... Enjoy a unique experience that will surely charm you!' }, location: { ja: '1-4教室', en: 'Room 1-4' } },
            { id: 'c34', category: 'class', name: { ja: '3年4組', en: 'Class 3-4' }, content: { ja: '廃病院', en: 'Deserted Hospital' }, description: { ja: '昔、人気の病院が突然閉鎖されたらしい、、、私の親友がその病院に入ってから様子がおかしい。その理由をたずねても怯えるばかりだ、、、その真相を突きとめるべく私はその廃病院に足を踏み入れることにした、、、', en: 'A popular hospital was suddenly closed long ago... To find out the truth, I decided to step into the abandoned hospital...' }, location: { ja: '3-4教室', en: 'Room 3-4' } },
            { id: 'c35', category: 'class', name: { ja: '3年5組', en: 'Class 3-5' }, content: { ja: '月見亭', en: 'Tsukimi-tei' }, description: { ja: 'お月見うさぎが誘う、大正ロマンのひととき―――風情ただよう空間で、心もお腹もほっと満たされる癒しの一杯をどうぞ。', en: 'An invitation from the moon-viewing rabbit to a moment of Taisho Roman. Enjoy a soothing bowl that will warm your heart and stomach.' }, location: { ja: '1-5教室', en: 'Room 1-5' } },
            { id: 'c36', category: 'class', name: { ja: '3年6組', en: 'Class 3-6' }, content: { ja: 'Cafe ZERO Gravity', en: 'Cafe ZERO Gravity' }, description: { ja: '宇宙人がやってきた!? 宇宙船内の神秘的なカフェで、惑星スイーツと銀河ドリンクをお楽しみください。まるで無重力な非日常体験をお届けします。', en: 'Aliens have arrived!? Enjoy planetary sweets and galactic drinks in a mystical spaceship cafe. A zero-gravity-like experience awaits.' }, location: { ja: '1-6教室', en: 'Room 1-6' } },
        ],
        clubs: [
            { id: 'literary', category: 'club', name: { ja: '文芸部', en: 'Literature Club' }, content: { ja: '我らの青春~俳句甲子園~', en: 'Our Youth ~ Haiku Koshien ~' }, description: { ja: 'この夏、私達は俳句甲子園全国大会で熱い戦いを繰り広げました。その様子をたなびく短冊と詳細を記した部誌の販売によってお届けします。', en: 'This summer, we fought hard in the national Haiku Koshien tournament. We will share our experience through our club magazine and poems.' }, location: { ja: '中央廊下・部室', en: 'Central Hallway / Clubroom' } },
            { id: 'jrc', category: 'club', name: { ja: 'JRC部', en: 'JRC Club' }, content: { ja: '飲んでスカッとレモネードスタンド', en: 'JRC Sales' }, description: { ja: '夏に丁度良いレモネードです。売り上げは小児がん患者への支援になります。一本で2度嬉しいレモネードはいかがですか？', en: 'Perfect for summer. Proceeds will support pediatric cancer patients. A lemonade that makes you happy twice!' }, location: { ja: '保健室前廊下', en: 'Hallway in front of Nurse\'s Office' } },
            { id: 'home_economics', category: 'club', name: { ja: '家庭科部', en: 'Home Economics Club' }, content: { ja: '家庭科部のクッキーやさん', en: 'Home Economics Club Sales' }, description: { ja: '家庭科部のクッキーが美味しいって伝えなきゃ！味はプレーン、ココア、抹茶、チョコチップって伝えなきゃ！', en: 'We have to tell you how delicious our cookies are! Flavors include plain, cocoa, matcha, and chocolate chip!' }, location: { ja: '中央廊下', en: 'Central Hallway' } },
            { id: 'regional_international', category: 'club', name: { ja: '探究部地域国際班', en: 'Regional International Group' }, content: { ja: '英国茶会', en: 'Regional International Group Booth' }, description: { ja: '空襲のときもイギリス人は欠かさなく飲んだという紅茶。今回は港とティーポットを間違えないようにしましょう。', en: 'It is said that the English drank tea even during air raids. Let\'s not mistake the harbor for the teapot this time.' }, location: { ja: '中央廊下', en: 'Central Hallway' } },
            { id: 'inquiry_a9', category: 'club', name: { ja: '探究A9班', en: 'Research Group A9' }, content: { ja: '規格外野菜・果物の販売', en: 'Sale of Non-standard Vegetables & Fruits' }, description: { ja: 'フードロス削減にご協力ください！', en: 'Please cooperate in reducing food loss!' }, location: { ja: '中央廊下', en: 'Central Hallway' } },
            { id: 'go_shogi', category: 'club', name: { ja: '囲碁将棋部', en: 'Go & Shogi Club' }, content: { ja: '青空将棋・改 ~目指せ藤井聡太!!~', en: 'Outdoor Shogi Kai' }, description: { ja: '例年に加え、キンキンに冷えたドリンクあり。どうぶつしょうぎや崩し将棋などもあり。部員に勝つと...!? ', en: 'In addition to the usual, we have ice-cold drinks. We also have Dobutsu Shogi and Kuzushi Shogi. If you beat a club member...!? ' }, location: { ja: '講堂前廊下', en: 'Hallway in front of Auditorium' } },
            { id: 'kendo', category: 'club', name: { ja: '剣道部', en: 'Kendo Club' }, content: { ja: '氷屋けんちゃん', en: 'Ice Shop Ken-chan' }, description: { ja: '今年もやります、毎年大好評の氷屋けんちゃん。剣道部伝統のかき氷と玉こんを、ぜひお買い求めください!!', en: 'We\'re doing it again this year! The ever-popular Ice Shop Ken-chan. Please come and buy our traditional shaved ice and tamakon!!' }, location: { ja: '武道館前', en: 'In front of Budokan' } },
            { id: 'soccer', category: 'club', name: { ja: 'サッカー部', en: 'Football Club' }, content: { ja: 'あなたの心にダイレクトシュート!絶品かき氷店', en: 'Direct Shot to Your Heart! Exquisite Shaved Ice Shop' }, description: { ja: 'サッカー部が運営するかき氷店です。様々なフレーバーを用意しています。中庭でのリフティングチャレンジも行うのでぜひ訪れてください。', en: 'A shaved ice shop run by the soccer club. We have various flavors. We also have a juggling challenge in the courtyard, so please visit!' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'handball', category: 'club', name: { ja: '男子ハンドボール部', en: 'Men\'s Handball Club' }, content: { ja: 'アメイジング・支那・ポップ', en: 'Amazing China Pop' }, description: { ja: '某インフルエンサー直伝！ゴールよりコーンを愛する男たちの至極の一品※真心こめてすべてハンドメイドで作っています。', en: 'Taught by a certain influencer! A masterpiece from the men who love corn more than goals. *Everything is handmade with love.' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'kyudo', category: 'club', name: { ja: '弓道部', en: 'Kyudo Club' }, content: { ja: '的当て', en: 'Archery Target Practice' }, description: { ja: '弓道部が主催の毎年恒的当て！当たった数によってお菓子ゲット！玩具の弓を使うので誰でも楽しめます。ぜひお越し下さい！', en: 'The annual target practice hosted by the Kyudo Club! Get sweets based on the number of hits! Anyone can enjoy it as we use toy bows.' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'track_field', category: 'club', name: { ja: '陸上部', en: 'Athletics club' }, content: { ja: 'デリシャスベビかす', en: 'Delicious Baby Castella' }, description: { ja: '色々な味のベビーカステラ用意しました。美味しいデリシャスベビかす。いかがですか？？', en: 'We have prepared baby castella in various flavors. How about some delicious baby castella??' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'badminton', category: 'club', name: { ja: 'バドミントン部', en: 'Badminton Club' }, content: { ja: 'ちー特製!? アオの綿あめドリンク', en: 'Chi\'s Special!? Ao\'s Cotton Candy Drink' }, description: { ja: '口で弾ける綿あめとドリンクのコンビネーション。何とも言えない味、爽快感溢れるスマッシュを喉の奥にぶち込みます。', en: 'The combination of cotton candy that pops in your mouth and a drink. An indescribable taste, we\'ll smash it deep down your throat with an exhilarating feeling.' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'basketball', category: 'club', name: { ja: 'バスケットボール部', en: 'Basketball Club' }, content: { ja: 'ICE DUNK SIDER', en: 'ICE DUNK SIDER' }, description: { ja: '普段は明るく元気でちょっと暑苦しいバスケ部が夏にぴったりの冷えた飲み物を提供します。体育館の盛り上げをバスケ部にお任せを･･･', en: 'The usually cheerful, energetic, and slightly intense basketball club will provide a cold drink perfect for summer. Leave it to us to liven up the gym...' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'tennis', category: 'club', name: { ja: '硬式テニス部', en: 'Hard Tennis Club' }, content: { ja: 'ジュースの王子様', en: 'Prince of Juice' }, description: { ja: '今年もテニス部ではゼリー入りドリンクを販売します！テニスの王子様たちがいます！ぜひ来てください！！！', en: 'The tennis club will be selling jelly drinks again this year! The Princes of Tennis are here! Please come!!!' }, location: { ja: '体育館', en: 'Gymnasium' } },
            { id: 'baseball', category: 'club', name: { ja: '野球部', en: 'Baseball Club' }, content: { ja: '球魂フロート', en: 'Baseball Soul Float' }, description: { ja: 'みなさん、今年はプロテインじゃないですよ。フロートを販売します。球魂フロートを食べて、暑い夏の日差しをスタンドまでかっ飛ばしましょう！！', en: 'Everyone, it\'s not protein this year. We\'re selling floats. Eat a Baseball Soul Float and hit the summer heat out of the park!!' }, location: { ja: '体育館入口', en: 'Gymnasium Entrance' } },
            { id: 'volleyball', category: 'club', name: { ja: 'バレーボール部', en: 'Volleyball Club' }, content: { ja: 'バレー部 Presents 倍倍ワッフル', en: 'Volleyball Club Presents Double-Up Waffles' }, description: { ja: 'バレー部ではワッフルを販売します。日々の練習で培ったチームワークでおいしさ・愛情倍増のワッフルはいかがですか？', en: 'The volleyball club is selling waffles. How about waffles with double the deliciousness and love, made with teamwork cultivated through daily practice?' }, location: { ja: '体育館入口', en: 'Gymnasium Entrance' } },
            { id: 'soft_tennis', category: 'club', name: { ja: 'ソフトテニス部', en: 'Soft Tennis Club' }, content: { ja: '氷屋そふてに', en: 'Soft Tennis Ice Shop' }, description: { ja: '山東祭を楽しむなら、水分&糖分補給も忘れずに！定番からちょっと変わり種まで、いろんな味をそろえてます！冷たいかき氷で暑さをふっとばそー！', en: 'If you\'re enjoying the festival, don\'t forget to hydrate and get some sugar! We have a variety of flavors, from classic to unique! Beat the heat with cold shaved ice!' }, location: { ja: '体育館入口', en: 'Gymnasium Entrance' } },
            { id: 'art', category: 'club', name: { ja: '美術部', en: 'Art Club' }, content: { ja: 'オリジナル缶バッチ作り！', en: 'Art Club Showcase & Creative Experience' }, description: { ja: '美術部は、スパッタリング技法を使った缶バッチ作りをします。一緒にオリジナル缶バッチ作ってみませんか', en: 'The art club will be making button badges using the spattering technique. Why not make an original button badge with us?' }, location: { ja: '美術室', en: 'Art Studio' } },
            { id: 'calligraphy', category: 'club', name: { ja: '書道部', en: 'Calligraphy Club' }, content: { ja: '山東書"東"展&書道パフォーマンス', en: 'Calligraphy Club Showcase & Performance' }, description: { ja: '力作揃いの書道展とダイナミックな書道パフォーマンスをします。どちらも最高な出来となっておりますのでぜひお越しください！', en: 'We will have a calligraphy exhibition with many masterpieces and a dynamic calligraphy performance. Both are excellent, so please come and see them!' }, location: { ja: '書道室', en: 'Calligraphy Studio' } },
            { id: 'photo', category: 'club', name: { ja: '写真部', en: 'Photography Club' }, content: { ja: '山東リトルコスモラボ', en: 'Yamato Little Cosmo Lab' }, description: { ja: '今だけの青春の一コマ、写真で未来に残しませんか？昇降口右手側にある写真部室にて、フォトスポット開設&ブロマイド販売！', en: 'Why not capture a moment of your youth in a photo to keep for the future? We have a photo spot and are selling prints in the photo club room on the right side of the entrance!' }, location: { ja: '写真室', en: 'Photo Room' } },
            { id: 'science', category: 'club', name: { ja: '探究部理数班科学部門', en: 'Inquiry Club - Science Dept.' }, content: { ja: 'ペットボトルロケット', en: 'Bottle Rocket' }, description: { ja: 'ペットボトルロケットは、水と空気の力で飛ぶ手作りロケット。仕組みを学びながら楽しく科学に触れられます。', en: 'A bottle rocket is a handmade rocket that flies with the power of water and air. You can learn about the mechanism while having fun with science.' }, location: { ja: 'グラウンド', en: 'Grounds' } },
            { id: 'library', category: 'club', name: { ja: '図書委員会', en: 'Library Committee' }, content: { ja: '古本市', en: 'Secondhand Book Market' }, description: { ja: '掘り出し物が見つかるかも？古本市へようこそ。', en: 'You might find a hidden gem! Welcome to the used book fair.' }, location: { ja: '2-6教室', en: 'Room 2-6' } }
        ]
    };

    const translations = {
        ja: {
            heroTitle: "山東祭2025<br>E-AST-", heroSubtitle: "『チ。-地球の運動について-』", infoTitle: "Information", infoDateTitle: "日程", infoDate1: "8月30日 (土)", infoDate2: "8月31日 (日)", infoTimeTitle: "一般公開 時間", infoTime1: "8/30 (土) 10:30 〜 15:00", infoTime2: "8/31 (日) 10:00 〜 14:00", crowdTitle: "リアルタイム混雑状況", crowdLoading: "混雑状況を読み込んでいます...", status_0: "空いています", status_1: "やや混雑", status_2: "大変混雑", scheduleTitle: "Schedule", scheduleDay1Title: "8/30 (Sat)", scheduleDay2Title: "8/31 (Sun)", scheduleDate1: "8月30日(土)", scheduleDate2: "8月31日(日)", scheduleVenueGym: "体育館", scheduleVenueHall: "講堂", eventD1G1: "オープニング", eventD1G2: "放送部作品上映", eventD1G3: "歌うまAブロック", eventD1G4: "一年生ダンス", eventD1G5: "チアパフォーマンス", eventD1G6: "歌うまBブロック", eventD1G7: "イントロドン", eventD1G8: "有志ダンス", eventD1A_none: "講堂での一般公開企画はありません", eventD2G1: "歌うまCブロック", eventD2G2: "H-1グランプリ", eventD2G3: "一年生ダンス", eventD2G4: "有志ダンス", eventD2G5: "書道パフォーマンス", eventD2G6: "エンディング", eventD2A1: "スマブラ大会", eventD2A2: "歌うま準決勝", eventD2A3: "バンド", boothsTitle: "Booths & Exhibits", filterAll: "すべて", filterClass: "クラス", filterClub: "部活・委員会", mapTitle: "School Map", mapTab1F: "1F", mapTab2F: "2F", mapTab3F: "3F", mapTabGym: "体育館", mapDesc: "マップをクリックまたはタップで拡大表示します。", accessTitle: "Access", accessSchoolName: "山形県立山形東高等学校", accessAddressTitle: "住所:", accessAddress: "〒990-0044 山形県山形市緑町1-5-59", accessPhoneTitle: "電話:", accessGmapTitle: "地図で場所を確認", accessGmapButton: "Googleマップで開く", instagramButton: "山東祭 公式Instagramへ", footerText: "© 2025 山形東高校 山東祭実行委員会", boothLocation: "場所:", boothContent: "内容:", researchPostersButton: "本校2年生の探究ポスターはこちら",
        },
        en: {
            heroTitle: "YAMATO Fes 2025<br>E-AST-", heroSubtitle: "'Orb: On the Movements of the Earth'", infoTitle: "Information", infoDateTitle: "Date", infoDate1: "August 30 (Sat)", infoDate2: "August 31 (Sun)", infoTimeTitle: "Public Hours", infoTime1: "Aug 30 (Sat) 10:30 - 15:00", infoTime2: "Aug 31 (Sun) 10:00 - 14:00", crowdTitle: "Real-time Crowd Status", crowdLoading: "Loading crowd status...", status_0: "Available", status_1: "A bit crowded", status_2: "Very crowded", scheduleTitle: "Schedule", scheduleDay1Title: "Aug 30 (Sat)", scheduleDay2Title: "Aug 31 (Sun)", scheduleDate1: "Aug 30 (Sat)", scheduleDate2: "Aug 31 (Sun)", scheduleVenueGym: "Gymnasium", scheduleVenueHall: "Auditorium", eventD1G1: "Opening", eventD1G2: "Broadcasting Club Screening", eventD1G3: "Singing Contest Block-A", eventD1G4: "1st Year Dance Performance", eventD1G5: "Cheer Performance", eventD1G6: "Singing Contest Block-B", eventD1G7: "Intro Quiz", eventD1G8: "Volunteer Dance", eventD1A_none: "No public events in the auditorium.", eventD2G1: "Singing Contest Block-C", eventD2G2: "H-1 Grand Prix", eventD2G3: "1st Year Dance Performance", eventD2G4: "Volunteer Dance", eventD2G5: "Calligraphy Performance", eventD2G6: "Ending", eventD2A1: "Smash Bros. Tournament", eventD2A2: "Singing Contest Semi-final", eventD2A3: "Band Performances", boothsTitle: "Booths & Exhibits", filterAll: "All", filterClass: "Class", filterClub: "Clubs & Committees", mapTitle: "School Map", mapTab1F: "1F", mapTab2F: "2F", mapTab3F: "3F", mapTabGym: "Gymnasium", mapDesc: "Click or tap the map to enlarge.", accessTitle: "Access", accessSchoolName: "Yamagata Higashi High School", accessAddressTitle: "Address:", accessAddress: "1-5-59 Midori-cho, Yamagata-shi, Yamagata 990-0044", accessPhoneTitle: "Phone:", accessGmapTitle: "Check the location on the map", accessGmapButton: "Open in Google Maps", instagramButton: "Official Instagram", footerText: "© 2025 Yamagata Higashi High School Festival Committee", boothLocation: "Location:", boothContent: "Content:", researchPostersButton: "View 2nd Year Student Research Posters",
        }
    };

    let currentLang = localStorage.getItem('preferredLanguage') || 'ja';

    // --- 機能別関数 ---

    function translateAllStaticText(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    function updateLangSwitcherUI(lang) {
        const langSwitcherText = document.getElementById('lang-switcher-text');
        if (langSwitcherText) {
            langSwitcherText.textContent = lang === 'ja' ? 'English' : '日本語';
        }
    }

    function setLanguage(lang) {
        if (!['ja', 'en'].includes(lang) || currentLang === lang) return;
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        
        translateAllStaticText(lang);
        updateMapImages();
        updateLangSwitcherUI(lang);
        createAndDisplayBooths();
        window.updateCrowdStatusUI();
    }

    function updateMapImages() {
        const suffix = currentLang === 'en' ? '-En.svg' : '.svg';
        document.getElementById('map-1f').src = '山東祭校内マップ1F' + suffix;
        document.getElementById('map-2f').src = '山東祭校内マップ2F' + suffix;
        document.getElementById('map-3f').src = '山東祭校内マップ3F' + suffix;
        document.getElementById('map-gym').src = '山東祭校内マップ体育館' + suffix;
    }

    let lastReceivedStatuses = {};
    window.updateCrowdStatusUI = function(statuses) {
        if (statuses) lastReceivedStatuses = statuses;
        const grid = document.getElementById('crowd-status-grid');
        if (!grid) return;
        grid.innerHTML = '';
        const allBooths = [...boothData.classes, ...boothData.clubs];
        if (Object.keys(lastReceivedStatuses).length === 0) {
             grid.innerHTML = `<p class="loading-text" data-lang-key="crowdLoading">${translations[currentLang].crowdLoading}</p>`;
             return;
        }
        allBooths.forEach(booth => {
            const statusData = lastReceivedStatuses[booth.id];
            if (statusData) {
                const statusText = translations[currentLang][`status_${statusData.status}`] || '';
                const name = booth.name[currentLang];
                const statusElement = document.createElement('div');
                statusElement.className = 'status-item';
                statusElement.innerHTML = `
                    <span class="status-indicator status-${statusData.status}"></span>
                    <div><p style="font-weight: bold;">${name}</p><p style="font-size: 0.875rem; color: #9ca3af;">${statusText}</p></div>`;
                grid.appendChild(statusElement);
            }
        });
    }

    function createAndDisplayBooths() {
        const boothGrid = document.getElementById('booth-grid');
        if (!boothGrid) return;
        boothGrid.innerHTML = '';
        const allBooths = [...boothData.classes, ...boothData.clubs];
        
        allBooths.forEach(booth => {
            const card = document.createElement('div');
            card.className = 'booth-card floating-card';
            card.dataset.category = booth.category;
            card.innerHTML = `
                <div>
                    <h3 class="font-playfair">${booth.name[currentLang]}</h3>
                    <p>${booth.content[currentLang]}</p>
                </div>
                <div class="booth-details">
                    <p><strong>${translations[currentLang].boothLocation}</strong> ${booth.location[currentLang]}</p>
                    <p><strong>${translations[currentLang].boothContent}</strong> ${booth.content[currentLang]}</p>
                    <p style="margin-top: 0.5rem; font-size: 0.875rem;">${booth.description[currentLang]}</p>
                </div>`;
            boothGrid.appendChild(card);
        });
    }

    let firebaseInitialized = false;
    function initializeFirebase() {
        if (firebaseInitialized) return;
        firebaseInitialized = true;

        const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
            import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
            import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
            import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

            const firebaseConfig = {
                 apiKey: "AIzaSyBUclBluehOXOZXlDCeePcdVKmYdKkRxFI",
                 authDomain: "yamatosai2025-4f10b.firebaseapp.com",
                 projectId: "yamatosai2025-4f10b",
                 storageBucket: "yamatosai2025-4f10b.firebasestorage.app",
                 messagingSenderId: "817983089763",
                 appId: "1:817983089763:web:8ca71d1ff70812f2645c56",
                 measurementId: "G-H7VH1ZJYE9"
            };

            try {
                const app = initializeApp(firebaseConfig);
                const auth = getAuth(app);
                const db = getFirestore(app);
                
                signInAnonymously(auth).catch(console.error);

                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        const dbPath = \`/artifacts/\${firebaseConfig.projectId}/public/data/crowd-status\`;
                        onSnapshot(collection(db, dbPath), (snapshot) => {
                            const statuses = {};
                            snapshot.forEach((doc) => { statuses[doc.id] = doc.data(); });
                            window.updateCrowdStatusUI(statuses);
                        }, console.error);
                    }
                });
            } catch (error) {
                console.error("Firebase initialization failed:", error);
                const crowdGrid = document.getElementById('crowd-status-grid');
                if(crowdGrid) {
                    crowdGrid.innerHTML = \`<p class="loading-text">混雑状況の取得に失敗しました。</p>\`;
                }
            }
        `;
        document.body.appendChild(script);
    }

    function setupEventListeners() {
        document.getElementById('lang-switcher-btn').addEventListener('click', () => {
            setLanguage(currentLang === 'ja' ? 'en' : 'ja');
        });

        const faders = document.querySelectorAll('.fade-in-section');
        const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    if (entry.target.id === 'crowd-status') {
                        initializeFirebase();
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });
        faders.forEach(fader => appearOnScroll.observe(fader));

        document.getElementById('date-tabs').addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                document.querySelectorAll('#date-tabs button').forEach(t => t.classList.remove('tab-active'));
                e.target.classList.add('tab-active');
                const targetId = e.target.dataset.dateTarget;
                document.querySelectorAll('#schedule-content-container .date-content').forEach(content => {
                    content.classList.toggle('hidden', content.id !== targetId);
                });
            }
        });

        document.getElementById('map-tabs').addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                document.querySelectorAll('#map-tabs button').forEach(t => t.classList.remove('tab-active'));
                e.target.classList.add('tab-active');
                const targetId = e.target.dataset.mapTarget;
                document.querySelectorAll('#map-images .map-image').forEach(image => {
                    image.classList.toggle('hidden', image.id !== targetId);
                });
            }
        });
        
        document.getElementById('filters').addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                document.querySelectorAll('#filters button').forEach(btn => btn.classList.remove('filter-active'));
                e.target.classList.add('filter-active');
                const filter = e.target.dataset.filter;
                document.querySelectorAll('.booth-card').forEach(card => {
                    card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'flex' : 'none';
                });
            }
        });
        
        document.getElementById('booth-grid').addEventListener('click', (e) => {
            const card = e.target.closest('.booth-card');
            if (card) {
                const details = card.querySelector('.booth-details');
                if (details) {
                    details.style.display = details.style.display === 'block' ? 'none' : 'block';
                }
            }
        });

        const modal = document.getElementById('mapModal');
        const modalImage = document.getElementById('modalImage');
        const closeModal = document.getElementById('closeModal');
        document.getElementById('map-images').addEventListener('click', (e) => {
            if (e.target.classList.contains('map-image')) {
                modal.style.display = "flex";
                modalImage.src = e.target.src;
            }
        });
        closeModal.onclick = () => { modal.style.display = "none"; };
        window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };
    }

    function setupStarrySky() {
        const canvas = document.getElementById('starry-sky');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let stars = [];
        const resizeCanvas = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        class Star {
            constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.r = Math.random() * 1.5; this.a = 0.5 + Math.random() * 0.5; this.ac = Math.random() * 0.02 - 0.01; }
            draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(255,255,255, ${this.a})`; ctx.fill(); }
            update() { this.a += this.ac; if (this.a > 1 || this.a < 0) this.ac *= -1; this.draw(); }
        }
        for (let i = 0; i < 200; i++) stars.push(new Star());
        const animate = () => { requestAnimationFrame(animate); ctx.clearRect(0, 0, canvas.width, canvas.height); stars.forEach(s => s.update()); };
        animate();
        const footer = document.querySelector('footer');
        if (!footer) return;
        const footerStars = footer.querySelector('.footer-stars');
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const size = `${Math.random() * 2 + 1}px`;
            star.style.width = size;
            star.style.height = size;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`;
            footerStars.appendChild(star);
        }
    }

    // --- アプリケーションの初期化 ---
    setupEventListeners();
    translateAllStaticText(currentLang);
    updateMapImages();
    updateLangSwitcherUI(currentLang);
    createAndDisplayBooths();

    window.addEventListener('load', function() {
        setupStarrySky();
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }
    });
});

