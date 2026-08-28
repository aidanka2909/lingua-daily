const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function lesson(title, grammar, explanation, rule, examples, text, translation, task, hint, words, quiz) {
  return { title, grammar, explanation, rule, examples, text, translation, task, hint, words, quiz };
}

const a1 = [
  lesson('Начинаем говорить: Hello, I’m...', 'Глагол to be: «быть»', 'В английском нельзя просто сказать «Я Анна». Между «я» и именем нужен глагол am: I am Anna. В разговоре он почти всегда сокращается: I’m Anna.', 'I am / I’m — я (есть)\nYou are / You’re — ты, вы (есть)\nHe is / She is — он, она (есть)', [['I’m tired after work.','Я устала после работы.'], ['She is my colleague.','Она моя коллега.'], ['Are you from Kazakhstan?','Ты из Казахстана?']], 'Hello! My name is Kate. I am from Almaty. I am a designer. I am happy to meet you.', 'Привет! Меня зовут Кейт. Я из Алматы. Я дизайнер. Я рада познакомиться с вами.', 'Переведи текст на русский. Затем напиши 2–3 предложения о себе.', 'Hello! I’m Aida. I’m from Kazakhstan. I’m happy today.', [['colleague','коллега'],['tired','уставший'],['from','из'],['nice to meet you','приятно познакомиться']], [['Как правильно сказать «Я Айдана»?',['I Aidana','I am Aidana','Me Aidana'],'I am Aidana'],['Выбери перевод: She is tired.',['Она дома.','Она устала.','Она дизайнер.'],'Она устала.']]),
  lesson('Люди рядом: my family and friends', 'Артикли a и an', 'Артикль a ставится перед согласным звуком: a friend. Перед гласным звуком используем an: an engineer. Он не переводится отдельно, но делает фразу естественной.', 'a friend — друг\nan office — офис\nShe is an artist. — Она художница.', [['This is my friend Maria.','Это моя подруга Мария.'],['He is an engineer.','Он инженер.'],['I have a big family.','У меня большая семья.']], 'This is my brother. His name is Timur. He is an engineer and he is very kind. We are good friends.', 'Это мой брат. Его зовут Тимур. Он инженер и очень добрый. Мы хорошие друзья.', 'Переведи текст. Потом опиши одного человека: кто он и какой он.', 'This is my friend. She is a teacher. She is kind.', [['family','семья'],['friend','друг'],['engineer','инженер'],['kind','добрый']], [['Выбери верно',['a engineer','an engineer','engineer an'],'an engineer'],['A ставим перед...',['гласным звуком','согласным звуком','всеми словами'],'согласным звуком']]),
  lesson('Мой день: I usually...', 'Present Simple: что бывает обычно', 'Present Simple используем для регулярных действий: каждый день, обычно, по понедельникам. С I / you / we / they: work. С he / she / it добавляем -s: she works.', 'I usually drink tea.\nShe works from home.\nDo you work on Saturdays?', [['I get home at seven.','Я прихожу домой в семь.'],['He usually cooks dinner.','Он обычно готовит ужин.'],['We don’t work on Sunday.','Мы не работаем в воскресенье.']], 'I usually get home at six. I make tea and cook dinner. In the evening, I study English for twenty minutes.', 'Я обычно прихожу домой в шесть. Я завариваю чай и готовлю ужин. Вечером я изучаю английский двадцать минут.', 'Переведи текст. Напиши 3 предложения о своём обычном вечере.', 'I usually get home at... Then I... In the evening, I...', [['usually','обычно'],['every day','каждый день'],['get home','приходить домой'],['cook','готовить']], [['Какой вариант верный?',['She work at home.','She works at home.','She working at home.'],'She works at home'],['Usually — это...',['обычно','вчера','сейчас'],'обычно']]),
  lesson('Сейчас: I’m working', 'Present Continuous: действие сейчас', 'Когда действие происходит в эту минуту, используем am / is / are + глагол с -ing: I am reading. Это не привычка, а процесс прямо сейчас.', 'I’m studying now.\nShe is cooking.\nThey are not working today.', [['I’m waiting for the bus.','Я жду автобус.'],['Are you listening?','Ты слушаешь?'],['We are having dinner.','Мы ужинаем.']], 'It is eight o’clock. Kate is at home. She is listening to music and making dinner. Her friend is calling her.', 'Сейчас восемь часов. Кейт дома. Она слушает музыку и готовит ужин. Ей звонит подруга.', 'Переведи текст и напиши, что ты делаешь сейчас.', 'I’m sitting at home. I’m learning English now.', [['now','сейчас'],['wait','ждать'],['listen','слушать'],['busy','занятой']], [['Выбери действие сейчас',['I work now','I am working now','I working now'],'I am working now'],['Что добавляется к глаголу?',['-ed','-ing','-s'],'-ing']])
];

const course = {
  A1: a1,
  A2: [lesson('Планы и намерения: I’m going to...', 'Be going to: намерение', 'Конструкция am / is / are going to + глагол помогает сказать о решении или плане.', 'I’m going to rest.\nShe is going to call me.\nAre you going to travel?', [['I’m going to see my friends.','Я собираюсь увидеться с друзьями.'],['What are you going to do?','Что ты собираешься делать?']], 'This weekend I am going to rest. I am going to meet my friends on Saturday and stay home on Sunday.', 'В эти выходные я собираюсь отдохнуть. В субботу я встречусь с друзьями, а в воскресенье останусь дома.', 'Переведи текст и напиши о своём плане на выходные.', 'I’m going to...', [['plan','план'],['weekend','выходные'],['rest','отдыхать']], [['Правильный вариант',['I going to rest','I am going to rest'],'I am going to rest'],['Going to — это...',['план','прошлое'],'план']])],
  B1: [lesson('Опыт и новости: I’ve just...', 'Present Perfect: результат сейчас', 'Have / has + третья форма глагола показывает опыт или свежий результат, когда точное время не так важно.', 'I have finished my work.\nShe has already called.\nHave you ever been to London?', [['I’ve just arrived home.','Я только что пришла домой.'],['Have you finished?','Ты закончила?']], 'I have just finished work, so I am tired. I have already made dinner, and now I can relax.', 'Я только что закончила работу, поэтому устала. Я уже приготовила ужин и теперь могу отдохнуть.', 'Переведи текст. Напиши одно предложение с have / has.', 'I have already...', [['already','уже'],['just','только что'],['ever','когда-либо']], [['Верно?',['I have finish','I have finished'],'I have finished'],['Just — это...',['давно','только что'],'только что']])],
  B2: [lesson('Мнение и аргументы: In my view', 'Связки для аргументации', 'Связки делают мысль понятной: in my view — на мой взгляд, however — однако, because — потому что.', 'In my view, it is useful.\nHowever, it takes time.\nI agree because...', [['In my view, this is a good idea.','На мой взгляд, это хорошая идея.'],['However, it can be difficult.','Однако это может быть трудно.']], 'In my view, learning a language is useful. However, it takes time and regular practice.', 'На мой взгляд, изучение языка полезно. Однако оно требует времени и регулярной практики.', 'Переведи текст и вырази своё мнение об изучении языка.', 'In my view, ... because ...', [['however','однако'],['agree','соглашаться'],['useful','полезный']], [['However — это...',['однако','поэтому'],'однако'],['Связка для мнения',['In my view','Yesterday'],'In my view']])],
  C1: [lesson('Точная позиция: It is worth considering', 'Нюансированное высказывание', 'На уровне C1 важно не просто высказывать мнение, а показывать степень уверенности. It is worth considering — «стоит рассмотреть» — мягче и точнее прямого «we must».', 'It is worth considering the impact.\nI tend to think that...\nThe key issue is whether...', [['It is worth considering the long-term impact.','Стоит рассмотреть долгосрочное влияние.'],['I tend to think this approach is better.','Я склоняюсь к мнению, что этот подход лучше.']], 'It is worth considering the long-term impact of daily study. A short but consistent approach is often more sustainable.', 'Стоит рассмотреть долгосрочное влияние ежедневной учёбы. Короткий, но последовательный подход часто устойчивее.', 'Переведи текст и сформулируй мнение, используя it is worth considering.', 'It is worth considering...', [['impact','влияние'],['approach','подход'],['sustainable','устойчивый']], [['Верное выражение',['It worth considering','It is worth considering'],'It is worth considering'],['Sustainable — это...',['устойчивый','быстрый'],'устойчивый']])]
};

// Полная учебная карта. Все темы доступны сразу: можно идти последовательно
// или открыть правило, которое нужно повторить именно сегодня.
const curriculum = {
  A0: [
    ['Алфавит и звуки','English alphabet & sounds','Буквы и звуки не всегда совпадают. Начните с имени, простых гласных и букв, которые чаще всего путаются.','A /eɪ/, E /iː/, I /aɪ/, O /əʊ/, U /juː/','Hello /həˈləʊ/'],
    ['Приветствие и прощание','Greetings','Первый диалог строится на готовых фразах: приветствие, имя, ответ и прощание.','Hello! /həˈləʊ/\nHow are you? /haʊ ɑː juː/\nI’m fine. /aɪm faɪn/','Nice to meet you /naɪs tə miːt juː/'],
    ['Личные местоимения','Subject pronouns','I, you, he, she, it, we, they заменяют имена. Они всегда стоят перед глаголом.','I — я\nYou — ты / вы\nHe / she — он / она','She is Anna. /ʃiː ɪz ˈænə/'],
    ['Глагол to be','To be: am, is, are','To be нужен, чтобы сказать, кто вы, где вы и какие вы. В настоящем времени: am, is, are.','I am /aɪ æm/\nYou are /juː ɑː/\nHe is /hiː ɪz/','I’m ready. /aɪm ˈredi/'],
    ['Числа, возраст и телефон','Numbers','Числа нужны для возраста, времени, цен и телефонов. Учите их фразами, а не отдельным списком.','I am twenty-five. /aɪ æm ˌtwenti ˈfaɪv/','My number is... /maɪ ˈnʌmbə ɪz/'],
    ['Артикли a и an','Articles: a / an','A — перед согласным звуком, an — перед гласным звуком. Это «один / какой-то».','a book /ə bʊk/\nan apple /ən ˈæpəl/','She is an artist. /ʃiː ɪz ən ˈɑːtɪst/']
  ],
  A1: [
    ['Знакомство','To be: statements','Утверждение строится просто: подлежащее + am / is / are + информация о себе.','I’m from Kazakhstan.\nShe is a doctor.','I’m happy. /aɪm ˈhæpi/'],
    ['Вопросы с to be','To be: questions & negatives','Для вопроса am / is / are выходит на первое место. Для отрицания добавляем not.','Are you tired?\nI am not late.\nShe isn’t here.','Are you ready? /ɑː juː ˈredi/'],
    ['Семья и люди','Possessives: my, your, his, her','Притяжательные слова показывают, кому что принадлежит: my friend, her sister.','my /maɪ/\nyour /jɔː/\nhis /hɪz/\nher /hɜː/','This is my sister. /ðɪs ɪz maɪ ˈsɪstə/'],
    ['Предметы вокруг','This, that, these, those','This / that — один предмет; these / those — несколько. This ближе, that дальше.','This is my bag.\nThose are books.','What is this? /wɒt ɪz ðɪs/'],
    ['Множественное число','Plural nouns','Обычно добавляем -s: book → books. После s, x, ch, sh добавляем -es. Есть исключения: child → children.','one box — two boxes\none child — two children','These are my keys. /ðiːz ɑː maɪ kiːz/'],
    ['Обычный день','Present Simple','Present Simple — привычки и регулярность. С he / she / it к глаголу добавляем -s.','I work every day.\nShe works at home.','I usually cook. /aɪ ˈjuːʒuəli kʊk/'],
    ['Вопросы и отрицания','Do / does','Для вопросов и отрицаний в Present Simple используем do / does. После does глагол без -s.','Do you like tea?\nShe doesn’t work.','Does he live here? /dʌz hiː lɪv hɪə/'],
    ['Время и распорядок','Adverbs of frequency','Usually, often, sometimes, never показывают, как часто происходит действие. Обычно стоят перед смысловым глаголом.','I usually get up early.\nShe is always busy.','I sometimes walk. /aɪ ˈsʌmtaɪmz wɔːk/'],
    ['Действие сейчас','Present Continuous','Am / is / are + глагол-ing описывает действие именно сейчас.','I’m reading now.\nThey are working.','She’s cooking. /ʃiːz ˈkʊkɪŋ/'],
    ['Есть / имеются','There is / There are','There is — один предмет, there are — несколько. Это конструкция «есть, находится».','There is a café here.\nThere are two chairs.','There is a problem. /ðeər ɪz ə ˈprɒbləm/'],
    ['Место и направление','Prepositions of place','In, on, under, next to, between показывают местоположение.','The book is on the table.\nThe shop is next to the bank.','The keys are in my bag. /ðə kiːz ɑː ɪn maɪ bæɡ/'],
    ['Что нравится','Like + -ing','После like, love, hate часто используем глагол с -ing, когда говорим о занятии вообще.','I like reading.\nShe loves dancing.','I like cooking. /aɪ laɪk ˈkʊkɪŋ/'],
    ['Прошедшее: to be','Was / were','Was — I / he / she / it, were — you / we / they. Используем для состояния в прошлом.','I was at home.\nThey were tired.','Were you busy? /wɜː juː ˈbɪzi/'],
    ['Прошедшее: действия','Past Simple regular verbs','Для правильных глаголов в прошлом добавляем -ed: work → worked. Вопросы — did + начальная форма.','I watched a film.\nDid you call her?','I worked late. /aɪ wɜːkt leɪt/'],
    ['Будущие планы','Be going to','Am / is / are going to + глагол — намерения и планы.','I’m going to rest.\nAre you going to travel?','I’m going to learn. /aɪm ˈɡəʊɪŋ tə lɜːn/']
  ],
  A2: [
    ['Повтор: времена','Present Simple vs Continuous','Present Simple — обычно, Present Continuous — сейчас. Контекстные слова помогают выбрать форму.','I work every day.\nI’m working now.','What are you doing? /wɒt ɑː juː ˈduːɪŋ/'],
    ['Неправильные глаголы','Past Simple irregular verbs','У неправильных глаголов особая форма прошлого: go → went, see → saw, have → had. Их учат группами и в контексте.','I went home.\nShe saw a friend.','We had dinner. /wiː hæd ˈdɪnə/'],
    ['Вопросительные слова','Wh- questions','What, where, when, who, why, how помогают получить конкретную информацию.','Where do you live?\nWhy are you late?','How often? /haʊ ˈɒfən/'],
    ['Сравнения','Comparatives & superlatives','Короткие прилагательные: -er / -est; длинные: more / most.','This book is cheaper.\nIt is the most useful.','Better /ˈbetə/'],
    ['Количество','Some, any, much, many','Some — обычно в утверждениях, any — в вопросах и отрицаниях. Much — неисчисляемое, many — исчисляемое.','Do you have any questions?\nThere isn’t much time.','How many? /haʊ ˈmeni/'],
    ['Советы и обязанности','Should, have to, must','Should — совет, have to — необходимость, must — сильное правило или требование.','You should rest.\nI have to work.','You should try. /juː ʃʊd traɪ/'],
    ['Предложения помощи','Can, could, would like','Can — умение/разрешение, could — вежливее, would like — желание.','Can you help me?\nI’d like some tea.','Could you repeat? /kʊd juː rɪˈpiːt/'],
    ['Будущее','Will vs going to','Will — решение в момент разговора, прогноз; going to — план или очевидное намерение.','I’ll call you.\nI’m going to call her.','I’ll be back. /aɪl biː bæk/'],
    ['Опыт','Present Perfect: basics','Have / has + третья форма глагола: опыт или результат, важный сейчас.','I have finished.\nShe has been to London.','I’ve just arrived. /aɪv dʒʌst əˈraɪvd/'],
    ['Путешествия','Infinitive of purpose','To + глагол часто объясняет цель действия.','I went there to buy bread.\nI’m learning to speak.','To understand /tuː ˌʌndəˈstænd/']
  ],
  B1: [
    ['Настоящее совершённое','Present Perfect vs Past Simple','Present Perfect связывает прошлое с настоящим; Past Simple называет завершённое время в прошлом.','I have seen it.\nI saw it yesterday.','Have you ever...? /hæv juː ˈevə/'],
    ['Длительность','For, since, Present Perfect Continuous','For — период, since — точка начала. Continuous подчёркивает процесс и длительность.','I’ve lived here for years.\nShe has been working since nine.','For a long time /fɔː ə lɒŋ taɪm/'],
    ['Будущее в контексте','Future forms','Will, going to, Present Continuous и Present Simple могут говорить о будущем — выбор зависит от ситуации.','The train leaves at six.\nI’m meeting her tomorrow.','I’m looking forward to it. /aɪm ˈlʊkɪŋ ˈfɔːwəd tə ɪt/'],
    ['Условия','First and second conditional','First conditional — реальная возможность; second — гипотеза/мечта.','If it rains, I’ll stay home.\nIf I had time, I would travel.','If I were you... /ɪf aɪ wɜː juː/'],
    ['Страдательный залог','Passive voice','Пассив важен, когда важнее действие или результат, а не исполнитель.','The book was written in 2020.\nEnglish is spoken here.','It was made here. /ɪt wɒz meɪd hɪə/'],
    ['Косвенная речь','Reported speech','Мы пересказываем слова другого человека; время часто сдвигается назад.','She said she was tired.\nHe told me to wait.','She said that... /ʃiː sed ðæt/'],
    ['Определения','Relative clauses','Who — о людях, which — о предметах, that — универсально в определительных придаточных.','The woman who called is my manager.','The book that I bought... /ðə bʊk ðæt aɪ bɔːt/'],
    ['Модальные оттенки','Modals of deduction','Must, might, can’t выражают степень уверенности о настоящем или прошлом.','She must be tired.\nIt might rain.','He can’t be serious. /hiː kɑːnt biː ˈsɪəriəs/']
  ],
  B2: [
    ['Сложные времена','Perfect and continuous review','Выбирайте форму по смыслу: результат, длительность, завершённое событие или процесс.','I had been waiting for an hour.\nI will have finished by six.','By the time... /baɪ ðə taɪm/'],
    ['Инверсия и акцент','Inversion for emphasis','В формальном и выразительном английском отрицательные наречия выносятся в начало.','Never have I seen this.\nNot only did she call...','Never have I... /ˈnevə hæv aɪ/'],
    ['Согласование','Advanced conditionals','Смешанные условные соединяют прошлую причину и нынешний результат.','If I had studied, I would know it now.','If only... /ɪf ˈəʊnli/'],
    ['Причина и следствие','Linking ideas','However, therefore, whereas, despite, in spite of помогают строить связный аргумент.','However, it is expensive.\nTherefore, we decided to wait.','In my view /ɪn maɪ vjuː/'],
    ['Глагольные модели','Gerund vs infinitive','После одних глаголов идёт -ing, после других to + infinitive; иногда смысл меняется.','I stopped smoking.\nI stopped to smoke.','I regret to say... /aɪ rɪˈɡret tə seɪ/'],
    ['Предположения о прошлом','Past modals','Must have, might have, can’t have — выводы о прошлом.','She must have forgotten.\nThey might have left.','He can’t have known. /hiː kɑːnt hæv nəʊn/']
  ],
  C1: [
    ['Нюансы модальности','Hedging and stance','С1-речь выражает мнение аккуратно: tend to, appear to, may well, arguably.','It appears to be effective.\nThis may well be true.','It is worth considering. /ɪt ɪz wɜːθ kənˈsɪdərɪŋ/'],
    ['Номинализация','Nominalisation','Номинализация делает формальную речь плотнее: decide → decision, improve → improvement.','The decision was unexpected.\nFurther improvement is needed.','The main issue is... /ðə meɪn ˈɪʃuː ɪz/'],
    ['Продвинутые придаточные','Participle clauses','Причастные конструкции сокращают и связывают предложения.','Having finished work, she went home.\nGiven the facts, ...','Having said that... /ˈhævɪŋ sed ðæt/'],
    ['Сложная инверсия','Inversion and cleft sentences','Инверсия и cleft-конструкции добавляют фокус и выразительность.','What I need is more time.\nRarely do we see this.','What matters is... /wɒt ˈmætəz ɪz/'],
    ['Академический аргумент','Cohesion and argument','Аргумент строится через тезис, обоснование, контраргумент и вывод. Используйте связки осмысленно, а не механически.','While this is true, ...\nNevertheless, ...','On balance /ɒn ˈbæləns/'],
    ['Естественные сочетания','Collocations & register','Продвинутая речь зависит от коллокаций и регистра: make a decision, pose a challenge, highly likely.','It poses a significant challenge.\nThe outcome is highly likely.','Highly likely /ˈhaɪli ˈlaɪkli/']
  ]
};

// Дополнительные главы закрывают базовую программу целиком: от первых фраз
// до академического и профессионального английского.
function addChapters(levelName, chapters) { curriculum[levelName].push(...chapters); }
addChapters('A0', [
  ['Базовые команды','Classroom English','Фразы для обучения помогают понимать задание и просить помощь.','Listen and repeat.\nOpen your book.\nI don’t understand.','Please repeat. /pliːz rɪˈpiːt/'],
  ['Цвета, дни и месяцы','Everyday basics','Эти слова нужны, чтобы говорить о времени, дате и простых предметах.','Today is Monday.\nMy favourite colour is blue.','What day is it? /wɒt deɪ ɪz ɪt/'],
  ['Простые существительные','Nouns and names','Имя предмета — существительное. Начните с вещей, которые видите дома и на работе.','a table\na phone\na window','This is a phone. /ðɪs ɪz ə fəʊn/']
]);
addChapters('A1', [
  ['Еда и покупки','Countable and uncountable nouns','Исчисляемые предметы можно посчитать, неисчисляемые — нет: apples, but water.','an apple\nsome water\na bottle of milk','I need some water. /aɪ niːd sʌm ˈwɔːtə/'],
  ['Настоящие желания','Want, need, would like','Want и need говорят о желании и необходимости; would like — вежливая просьба.','I want coffee.\nI need help.\nI’d like tea.','I’d like a coffee. /aɪd laɪk ə ˈkɒfi/'],
  ['Умения','Can and can’t','Can показывает умение или возможность; после него всегда начальная форма глагола.','I can swim.\nShe can’t drive.','Can you help me? /kæn juː help miː/'],
  ['Погода','It is','Для погоды используется безличное it: It is cold, It is raining.','It is sunny.\nIt is cold today.','It is raining. /ɪt ɪz ˈreɪnɪŋ/'],
  ['Повелительное наклонение','Imperatives','Глагол без подлежащего даёт инструкцию, совет или просьбу.','Come in.\nDon’t worry.\nBe careful.','Take your time. /teɪk jɔː taɪm/'],
  ['Неправильное прошлое','Past Simple irregular verbs','Самые частые формы: went, had, did, saw, made, took, came, got.','I went home.\nShe had dinner.\nWe saw a film.','I went home. /aɪ went həʊm/'],
  ['Предлоги времени','In, on, at','In — месяцы/годы/части дня; on — дни и даты; at — точное время.','in July\non Monday\nat seven','At seven o’clock. /æt ˈsevən əˈklɒk/']
]);
addChapters('A2', [
  ['Настоящее совершённое: already/yet','Present Perfect markers','Already — уже, yet — ещё/уже в вопросах и отрицаниях, just — только что.','I have already eaten.\nHave you finished yet?','Not yet. /nɒt jet/'],
  ['Привычки в прошлом','Used to','Used to описывает прошлую привычку или состояние, которого больше нет.','I used to live there.\nShe didn’t use to drive.','I used to... /aɪ juːst tə/'],
  ['Слишком и достаточно','Too and enough','Too — слишком, enough — достаточно. Порядок слов разный: too tired, good enough.','It is too expensive.\nIt is warm enough.','Too much. /tuː mʌtʃ/'],
  ['Относительные придаточные','Who, which, that','Who — люди, which — предметы, that — часто заменяет оба в разговорной речи.','The woman who called...\nThe book that I read...','The person who... /ðə ˈpɜːsən huː/'],
  ['Наречия','Adverbs','Наречия описывают действие: slowly, carefully, well. Многие образуются с -ly.','She speaks slowly.\nHe works carefully.','Very well. /ˈveri wel/'],
  ['Косвенные вопросы','Indirect questions','Вежливый вопрос начинается с Could you tell me...; внутри порядок слов обычный.','Could you tell me where it is?','Could you tell me...? /kʊd juː tel miː/']
]);
addChapters('B1', [
  ['Третий тип условия','Third conditional','Говорим о прошлом, которое уже нельзя изменить: If + Past Perfect, would have + V3.','If I had known, I would have called.','If I had known... /ɪf aɪ hæd nəʊn/'],
  ['Пожелания и сожаления','Wish and if only','Wish + Past Simple — желание о настоящем; wish + Past Perfect — сожаление о прошлом.','I wish I had more time.\nIf only I knew.','I wish... /aɪ wɪʃ/'],
  ['Фразовые глаголы','Phrasal verbs','Значение глагола меняет маленькая частица: look for, give up, find out. Учите их в фразах.','I’m looking for my keys.\nDon’t give up.','Find out. /faɪnd aʊt/'],
  ['Письмо и сообщения','Formal and informal writing','Выбирайте стиль по ситуации: Hi в чате, Dear... и Kind regards в письме.','I’m writing to ask...\nCould you please...?','Kind regards /kaɪnd rɪˈɡɑːdz/'],
  ['Дискуссия','Opinion language','Аргументу нужны мнение, причина, пример и уважительный контраргумент.','I believe that...\nOn the other hand...','I see your point. /aɪ siː jɔː pɔɪnt/']
]);
addChapters('B2', [
  ['Каузатив','Have / get something done','Эта конструкция говорит, что услугу сделал другой человек.','I had my hair cut.\nShe got her phone fixed.','I had it repaired. /aɪ hæd ɪt rɪˈpeəd/'],
  ['Усилители','Intensifiers','Absolutely, highly, deeply, completely сочетаются с определёнными словами и делают речь точнее.','Absolutely essential.\nDeeply disappointed.','Highly recommended. /ˈhaɪli ˌrekəˈmendɪd/'],
  ['Дискурс и реестр','Register','Выбирайте нейтральный, разговорный или формальный стиль под аудиторию и цель.','I would appreciate...\nThanks a lot.','I would appreciate it. /aɪ wʊd əˈpriːʃieɪt ɪt/']
]);
addChapters('C1', [
  ['Концизность','Advanced sentence control','На C1 важно управлять длиной, акцентом и логикой предложения, а не просто усложнять его.','What is striking is...\nThe extent to which...','The extent to which... /ði ɪkˈstent tə wɪtʃ/'],
  ['Идиомы и образность','Idiomatic language','Идиомы используют только там, где они естественны для регистра и ситуации.','It is not my cup of tea.\nWe are on the same page.','On the same page. /ɒn ðə seɪm peɪdʒ/'],
  ['Редактирование текста','Precision and self-correction','Финальный навык — замечать повтор, двусмысленность, слишком сильное утверждение и исправлять это.','To put it more precisely...\nA more accurate term is...','More precisely /mɔː prɪˈsaɪsli/']
]);

function makeCurriculumLesson(item) {
  const [title, grammar, explanation, rule, phrase] = item;
  const keyWord = phrase.split(' /')[0];
  const translations = {
    'Hello':'Привет!', 'Nice to meet you':'Приятно познакомиться!', 'She is Anna.':'Она Анна.', 'I’m ready.':'Я готова.', 'I am twenty-five.':'Мне двадцать пять лет.', 'She is an artist.':'Она художница.',
    'I’m from Kazakhstan.':'Я из Казахстана.', 'Are you ready?':'Ты готова?', 'This is my sister.':'Это моя сестра.', 'What is this?':'Что это?', 'These are my keys.':'Это мои ключи.', 'I usually cook.':'Я обычно готовлю.', 'Does he live here?':'Он живёт здесь?', 'I sometimes walk.':'Я иногда гуляю.', 'She’s cooking.':'Она готовит.', 'There is a problem.':'Есть проблема.', 'The keys are in my bag.':'Ключи в моей сумке.', 'I like cooking.':'Мне нравится готовить.', 'Were you busy?':'Ты была занята?', 'I worked late.':'Я работала допоздна.', 'I’m going to learn.':'Я собираюсь учиться.',
    'What are you doing?':'Что ты сейчас делаешь?', 'We had dinner.':'Мы поужинали.', 'How often?':'Как часто?', 'Better':'Лучше.', 'How many?':'Сколько?', 'You should try.':'Тебе стоит попробовать.', 'Could you repeat?':'Не могли бы вы повторить?', 'I’ll be back.':'Я вернусь.', 'I’ve just arrived.':'Я только что приехала.', 'To understand':'Понимать.',
    'Have you ever...?':'Ты когда-нибудь...?', 'For a long time':'Долгое время.', 'I’m looking forward to it.':'Я с нетерпением этого жду.', 'If I were you...':'На твоём месте я бы...', 'It was made here.':'Это было сделано здесь.', 'She said that...':'Она сказала, что...', 'The book that I bought...':'Книга, которую я купила...', 'He can’t be serious.':'Не может быть, чтобы он говорил серьёзно.',
    'By the time...':'К тому времени, как...', 'Never have I...':'Никогда я не...', 'If only...':'Если бы только...', 'In my view':'На мой взгляд.', 'I regret to say...':'С сожалением сообщаю...', 'He can’t have known.':'Он не мог этого знать.',
    'It is worth considering.':'Это стоит рассмотреть.', 'The main issue is...':'Главный вопрос в том, что...', 'Having said that...':'С учётом сказанного...', 'What matters is...':'Важно то, что...', 'On balance':'В целом, взвесив всё.', 'Highly likely':'Весьма вероятно.'
  };
  const phraseTranslation = translations[keyWord] || `Фраза по теме «${grammar}»: «${keyWord}».`;
  const ruleTranslation = rule.split('\n')[0].replace(/\/[^^/]+\//g, '');
  const cleanPhrase = phrase.replace(/\s*\/[^/]+\//g, '');
  const longText = `This evening, Elena is studying ${grammar}. She begins with one useful phrase: “${cleanPhrase}”. First, she reads the rule slowly and says the sentence aloud. Then she writes three examples about her own life. Her friend asks a question, and Elena answers using the new structure. She does not try to remember every word at once. Instead, she notices the pattern, repeats it, and uses it in a short conversation. At the end of the lesson, Elena feels more confident because she can understand the rule and use it in a real situation.`;
  const longTranslation = `Сегодня вечером Елена изучает тему «${grammar}». Она начинает с полезной фразы: «${phraseTranslation}». Сначала она медленно читает правило и произносит предложение вслух. Затем она пишет три примера о своей жизни. Подруга задаёт вопрос, а Елена отвечает, используя новую конструкцию. Она не пытается запомнить все слова сразу. Вместо этого она замечает схему, повторяет её и использует в коротком разговоре. В конце урока Елена чувствует себя увереннее, потому что понимает правило и может использовать его в реальной ситуации.`;
  const extraExamples = [['I can use this rule in my own sentence.','Я могу использовать это правило в собственном предложении.'], ['Can you give me another example?','Можешь дать мне ещё один пример?'], ['I understand the main idea now.','Теперь я понимаю основную мысль.']];
  return lesson(title, grammar, explanation, rule, [[phrase, phraseTranslation], [rule.split('\n')[0], `Конструкция: ${ruleTranslation}.`], ...extraExamples], longText, longTranslation, `Переведи весь текст. Затем напиши 4–5 своих предложений по теме «${grammar}» и используй фразу «${cleanPhrase}».`, `Начните с: ${keyWord} ...`, [[keyWord, phrase.match(/\/[^/]+\//)?.[0] || 'транскрипция'], ['grammar', 'правило /ˈɡræmə/'], ['example', 'пример /ɪɡˈzɑːmpəl/']], [[`Выберите тему этого урока: ${grammar}`, [grammar, 'Другая тема'], grammar], ['Как лучше закрепить правило?', ['Прочитать пример и написать свой', 'Пропустить все примеры'], 'Прочитать пример и написать свой']]);
}

Object.keys(curriculum).forEach(levelName => { course[levelName] = curriculum[levelName].map(makeCurriculumLesson); });

let state = JSON.parse(localStorage.getItem('lingua-full') || '{"level":null,"lesson":0,"parts":[],"finished":[]}');
let level = state.level || 'A1';
const data = () => course[level][state.lesson] || course[level][0];
function save(){ localStorage.setItem('lingua-full', JSON.stringify(state)); }
function mark(part){ if(!state.parts.includes(part)){ state.parts.push(part); save(); renderTop(); } }
function goToLesson(number){ state.lesson = number; state.parts = []; save(); renderAll(); $('#lesson').scrollIntoView(); }

function renderTop(){ const l=data(), done=state.parts.length; $('#levelBadge').textContent=state.level?`${level} · твой маршрут`:'Определим уровень'; $('#levelMeter').style.width=state.level?`${17+['A0','A1','A2','B1','B2','C1'].indexOf(level)*16}%`:'0%'; $('#lessonPosition').textContent=`УРОК ${state.lesson+1} ИЗ ${course[level].length}`; $('#heroTitle').textContent=l.title; $('#heroIntro').textContent=l.explanation; $('#stepCounter').textContent=`${done} из 4 частей`; $('#percent').textContent=`${done*25}%`; $('#progressFill').style.width=`${done*25}%`; }
function buildRoadmap(){ const levels=['A0','A1','A2','B1','B2','C1']; $('#levelTabs').innerHTML=levels.map(x=>`<button class="${x===level?'active':''}" data-level="${x}">${x}</button>`).join(''); $$('#levelTabs button').forEach(b=>b.onclick=()=>chooseLevel(b.dataset.level)); $('#lessonRoadmap').innerHTML=course[level].map((l,i)=>`<article class="road-card ${i===state.lesson?'current':''}" data-num="${i}"><span class="num">${String(i+1).padStart(2,'0')}</span><span class="state">${state.finished.includes(level+'-'+i)?'✓ Пройден':(i===state.lesson?'Сейчас':'Открыт')}</span><h3>${l.title}</h3><p>${l.grammar}</p></article>`).join(''); $$('.road-card').forEach(card=>card.onclick=()=>goToLesson(+card.dataset.num)); }
function buildLesson(){ const l=data(); $('#lessonKicker').textContent=`УРОК ${state.lesson+1} · ${level} · ГРАММАТИКА И ПРАКТИКА`; $('#lessonHeading').textContent=l.grammar; $('#lessonTime').textContent='Ориентир — 20–25 минут. Вы сами решаете, сколько сегодня сделать.'; $('#lessonBody').innerHTML=`<div class="lesson-layout"><article class="learn-card"><span class="part-label">ЧАСТЬ 1 · ПОЙМИ</span><h3>${l.grammar}</h3><p class="lead">${l.explanation}</p><div class="grammar-rule"><b>${l.rule.split('\n')[0]}</b><p>${l.rule.split('\n').slice(1).join('<br>')}</p></div><table class="example-table"><thead><tr><th>АНГЛИЙСКИЙ</th><th>ПЕРЕВОД</th></tr></thead><tbody>${l.examples.map(x=>`<tr><td>${x[0]}</td><td>${x[1]}</td></tr>`).join('')}</tbody></table><p class="tip">Совет: проговорите примеры вслух и замените одно слово на своё.</p><button class="check-button" id="understood">Я разобралась ✓</button></article><article class="practice-card"><span class="part-label">ЧАСТЬ 2 · ПРОЧИТАЙ И ПЕРЕВЕДИ</span><h3>Текст для перевода</h3><p class="lead">Сначала переведите смысл целиком, затем проверьте себя.</p><div class="text-box">${l.text}</div><button class="check-button" id="showTranslation">Показать перевод</button><div class="feedback" id="translation"></div><div class="word-box"><h4>Слова, которые помогут</h4><div class="word-pills">${l.words.map(w=>`<span><b>${w[0]}</b> — ${w[1]}</span>`).join('')}</div></div></article><article class="practice-card"><span class="part-label">ЧАСТЬ 3 · НАПИШИ САМА</span><h3>Твоя практика</h3><p class="lead">${l.task}</p><p class="translation-prompt">Подсказка: ${l.hint}</p><textarea class="answer-input" id="writing" placeholder="Напишите свой перевод или фразы здесь..."></textarea><button class="check-button" id="checkWriting">Проверить</button><p class="feedback" id="writingFeedback"></p></article></div><article class="test-card"><span class="part-label">ЧАСТЬ 4 · ФИНАЛЬНЫЙ ТЕСТ</span><h3>Проверим, что осталось в памяти</h3><p class="lead">Тест необязателен: следующий урок доступен всегда.</p>${l.quiz.map((q,i)=>`<div class="question"><p>${i+1}. ${q[0]}</p><div class="answers">${q[1].map(a=>`<button class="answer" data-correct="${a===q[2]}">${a}</button>`).join('')}</div></div>`).join('')}<button class="check-button" id="finishTest">Проверить и перейти дальше →</button><button class="end-button" id="skipTest">Перейти к следующему уроку без теста →</button><p class="final-message" id="testFeedback"></p></article>`;
  $('#understood').onclick=()=>mark(0); $('#showTranslation').onclick=()=>{ $('#translation').innerHTML=`<b class="good">Перевод:</b> ${l.translation}`; mark(1); }; $('#checkWriting').onclick=()=>{ const f=$('#writingFeedback'); if($('#writing').value.trim().length<12){ f.textContent='Напишите чуть больше: хотя бы одно полное предложение или перевод текста.'; f.className='feedback bad'; } else { f.textContent='Отлично! Мысль уже оформлена. Сверьте порядок слов с подсказкой.'; f.className='feedback good'; mark(2); } }; $$('.answer').forEach(b=>b.onclick=()=>{ b.parentElement.querySelectorAll('.answer').forEach(x=>x.classList.remove('selected')); b.classList.add('selected'); });
  const next=()=>{ const id=level+'-'+state.lesson; if(!state.finished.includes(id)) state.finished.push(id); if(state.lesson<course[level].length-1){ state.lesson++; state.parts=[]; save(); renderAll(); $('#lesson').scrollIntoView(); } else { $('#testFeedback').textContent='Это последний урок этого блока. Можно выбрать другой уровень или повторить тему.'; save(); } }; $('#finishTest').onclick=()=>{ const score=$$('.question').filter(q=>q.querySelector('.selected[data-correct="true"]')).length; $('#testFeedback').textContent=`Верно: ${score} из ${l.quiz.length}. Переходим к следующему уроку.`; mark(3); setTimeout(next,350); }; $('#skipTest').onclick=next;
}
function chooseLevel(l){ state={level:l,lesson:0,parts:[],finished:[]}; level=l; save(); closeModal(); renderAll(); }
function levelModal(){ $('#modalContent').innerHTML=`<p class="caps">СТАРТ</p><h2>С какого уровня начнём?</h2><p>Выберите самый близкий вариант. Маршрут можно изменить позже.</p>${[['A0','Не знаю английский совсем'],['A1','Знаю простые слова и фразы'],['A2','Могу объясниться в знакомой ситуации'],['B1','Могу общаться на знакомые темы'],['B2','Говорю уверенно'],['C1','Хочу отточить сложную речь']].map(x=>`<button class="level-choice" data-choice="${x[0]}">${x[0]} — ${x[1]}</button>`).join('')}`; $('#modal').classList.add('show'); $$('.level-choice').forEach(b=>b.onclick=()=>chooseLevel(b.dataset.choice)); }
function closeModal(){ $('#modal').classList.remove('show'); }
function renderAll(){ renderTop(); buildRoadmap(); buildLesson(); }
$('#startLesson').onclick=()=>$('#lesson').scrollIntoView(); $('#endToday').onclick=()=>{ alert('Хорошая работа! Прогресс сохранён. Продолжите с этого же места, когда будет настроение.'); save(); }; $('#levelButton').onclick=levelModal; $('#levelButton2').onclick=levelModal; $('#close').onclick=closeModal; $('#modal').onclick=e=>{ if(e.target===$('#modal')) closeModal(); }; $('#date').textContent=new Intl.DateTimeFormat('ru-RU',{weekday:'long',day:'numeric',month:'long'}).format(new Date());

// Отдельный визуальный блок с транскрипцией: его видно без поиска по примерам.
const standardBuildLesson = buildLesson;
buildLesson = function () {
  standardBuildLesson();
  const current = data();
  const phrase = current.examples[0][0];
  const phonetic = (phrase.match(/\/[^/]+\//) || current.words.map(word => word[1]).join(' ').match(/\/[^/]+\//) || ['/—/'])[0];
  const block = document.createElement('section');
  block.className = 'pronunciation-card';
  block.innerHTML = `<h4>🔊 Как произнести</h4><p>Прочитайте фразу вслух. Символы между косыми чертами — международная транскрипция.</p><b>${phrase.replace(/\s*\/[^/]+\//, '')}</b><span class="phonetic">${phonetic}</span>`;
  $('#lessonBody .learn-card').append(block);
};

renderAll();
