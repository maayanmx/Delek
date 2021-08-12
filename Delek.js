
let data =["חדרה - צומת חדרה צומת חדרה כביש 4 - תד 295",
"נצרת - העיר רח' פאולוס הששי 54  נצרת",
"קרית אתא כביש ק. ביאליק תד 87 ק.אתא 28000",
"עירון כביש 65 חדרה עפולה בצומת פרדס חנה",
"כרמיאל - שירותי כביש עכו צפת  בכניסה לכרמיאל",
"תחבורת חיפה  חטיבת גולני  44  חיפה 33086",
"עפולה רחוב החטיבה 9  21 עפולה",
"עכו דרך הארבעה 22  תד  24112   עכו",
"צומת שפרעם בכניסה לשפרעם כביש 781 שפרעם קריית אתא",
"מפגש אמיתי כביש החוף 2  נתניה- תל-אביב 42100",
"עין חרוד גלבוע  עין חרוד גלבוע כביש 71",
"נהריה רח' חניתה 9  נהריה 22385",
"מפגש העמק רח' הבנים  כביש הסרגל  עפולה 18265",
"מפגש בלפור תד 376  מגדל העמק 10553",
"טבריה העיר רחו' אל חדיף  טבריה",
"כפר חסידים כביש צ. יגור-שפרעם  כ. חסידים 20400",
"פינת בת גלים רח' יפו 154  תד 9838 חיפה 31097",
"מפגש נעמן כביש 4 עכו חיפה  צ. כפר מסריק תד 2523 עכו",
"קרית ים  שד' ירושלים 50  קרית ים",
"זכרון יעקב זכרון יעקב - מושבה",
"מפגש עדה גבעת עדה כביש 653",
"בר יהודה כביש חיפה  צ'ק פוסט- ליד הגשר תד 315",
"יפיע ביציאה מנצרת  מגדל העמק כביש 75",
"צפת   צומת ביריה  תד 1468  צפת 13113",
"עפולה עילית אזור התעשיה עפולה עילית",
"שער העליה יציאה מחיפה כביש 4  כיוון תא  תד 3040 חיפה",
"נצרת- בוסתן 1 רח' פאולוס השישי ",
"צומת גולני כביש 77 -תד 934   כפר טורען 16950 ",
"קרית שמונה - גליל עליון אזור התעשיה דרומית ק.שמונה 10200 ",
"נצרת- בוסתן 2 רח' המוסכים 206  נצרת ",
"קישון  חיפה כביש קישון  אזור הנפט  חיפה",
"שדי תרומות כ- 5 קמ ביציאה מבית שאן  כיוון הבקעה כביש 90",
"אום אל פחם  איזור אל ביר  אום אל פחם ",
"הדר רחוב החלוץ 17  חיפה 33101",
"ורדיה מחלף רופין שמשון - וואדי רושמיה חיפה",
"גן שמואל כביש עפולה-חדרה  בכניסה לגן שמואל",
"סונול פסגת חרמון מבואות מג'דל שמס",
"תל-חנן רחוב  בר יהודה   תל-חנן ",
"מפרץ חיפה -א. קורן כ.חיפה קריות תד 10191 מפרץ חיפה 26111",
"כבול כפר כבול 24963 כניסה מכביש 70",
"דניה דרך אבא חושי   חיפה 34987 ",
"מבואות תמרה א.תעשייה תמרה כניסה מכביש 70",
"עתלית צומת מחנה המעפילים  עתלית",
"סונול מעיליא כניסה לכפר מעיליא",
"יסוד המעלה כביש יסוד המעלה כביש 90- קרית שמונה",
"סונול אכסאל כפר אכסאל א.ת.",
"קריון - כביש חיפה - עכו חניון הקריון (כביש 4 חיפה - עכו",
"העיר רמלה רח' הרצל 131  פינת קלאוזנר רמלה",
"רמתיים רמתיים  דרך השרון 61  הוד השרון",
"צומת השרון כ. תא - נתניה  מתחת לגשר  נתניה",
"מגדל אשקלון צומת אשקלון כניסה מכביש 4",
"נתניה - מרכז רח' הרצל 37  נתניה ",
"יד מרדכי צומת יד מרדכי כביש 4  כביש עזה -אשקלון",
"צומת פלוגות צומת פלוגות קרית גת כביש 40",
"כפר יונה  כביש הראשי טול כרם כפר יונה ",
"סונול מגדל דרך מנחם בגין 52 תל אביב ",
"תחנת החוף כביש תא הרצליה  הרב מכר תנובה",
"רחובותבילו סנטר  מתחם בילו סנטר ליד אייס", 
"טייבה עיר טייבה  כביש 444",
"קוממיות שד' קוממיות בת-ים ",
"הבילויים- גדרה הרצל 4  גדרה", 
"בית עובד בית עובד - כביש 42 גן יבנה - תל-אביב",
"קרן אור יהודה רח' החרושת 2  א.ת. חדש אור יהודה ",
"שער לוד דרך אבא הילל סילבר   לוד",
"איילון דרך פתח תקווה 154  תל-אביב",
"רחוב אילת רח' אילת 45  תל-אביב",
"ראשון לציון רח' הרצל 62  ראשון לציון",
"סונול מעיא רח' המלאכה 4 תל אביב ",
"מרכזים רח' קיבוץ גלויות 26   יפו",
"המרכבה המרכבה 35  חולון - א. תעשיה ",
"עטרת כביש נס ציונה - ראשלצ",
"סונול באר יעקב באר יעקב",
"יפו שד' ירושלים 40  יפו",
"שלי - ראשלצ ספיר 2  פינת משה דיין  א.ת. ראשלצ",
"אשל השומרון כביש חוצה שומרון  כניסה לאריאל",
"משגב דרך בן צבי  94  תא  68104",
"כפר סבא מזרח רח' ויצמן 201  כפר סבא",
"אשדוד צפון א.ת. צפוני  אשדוד",
"נהורה מושב נהורה כביש 352",
"משמר השבעה  אזור משמר השבעה",
"כנות צומת כנות - חצור",
"משואות יצחק מושב משואות יצחק",
"סמדר שד' הרצל פינת תרצה  י-ם",
"הבירה ביציאה מירושלים לתל-אביב כביש 50",
"גן הפעמון דרך בית לחם  ירושלים",
"קלנדיה כ. ירושלים  רמאלה  כניסה מעטרות כביש 45",
"שער דרום - ירושלים דרך חברון ירושלים כביש 60",
"הר נוף המלמד  פינת כנפי נשרים  הר נוף י-ם",
"סונול יער ביתר יער ביתר/מבוא ביתר",
"סונול תלפיות האומן 1  תלפיות ירושלים",
"שילת כביש ב. שמן -ירושלים (צפון)",
"יטבתה - קטורה קיבוץ יוטבתה כביש 90",
"הדס ד. הנשיאים בכניסה לבאר שבע",
"דימונה בכניסה לעיר  איזור התעשיה",
"אילת בכניסה הצפונית לאילת כביש 90 ",
"הנחל בש  ד. המלאכה בש  יציאה דרו' מהעיר",
"אלמיג חוף אלמיג - אילת כביש 90",
"מתקן דבסול בכניסה לעומר כביש 60",
"ערד בעיר ערד כניסה מכביש 31",
"ירוחם בכניסה לירוחם מכביש 204",
"מצדה דרך מצדה באר שבע",
"כפר קמא  כפר קמא כניסה מכביש 65 לכביש 767",
"סונול אספלט דרום רח' המנוף 1א' עמק שרה באר שבע",
"חורפיש כביש 89 - אזור התעשיה ",
"מיקה פתח תקוה  רחוב הסיביםפינת ז'בוטינסקי פת",
"צפריה מושב צפריה ",
"לירי ביתן אהרון בכניסה לביטן אהרון ",
"קצרין אזור תעשייה קצרין ",
"סונול מגדל (צ.המנגו) כביש עמיעד - טבריה",
"שדי יואב  שדה יואב  ד.נ. לכיש דרום",
"מפגש עלי  ד.נ. אפריים  כניסה מכביש 60",
"עוספיה  רחוב אבא חושי 106 - עוספיה",
"סונול עילוט כניסה ראשית לעילוט",
"סונול מאור צפונית לכניסה למושב",
"אשדוד סיטי רחוב הרצל 1   פינת מנחם בגין   אשדוד ",
"הנשיא מושב תרום כניסה מכביש 44",
"צלמון  מג'אר - כביש 806",
"דנה - רשלצ  רחוב דרך המכבים פינת פריימן - רשלצ",
"בית אלפא  כביש 669 קיבוץ בית אלפא ד.נ. גלבוע 19140",
"שער הכרמל - אלייקים מחלף אליקים כביש 672",
"מבואות אתא/  רח' העצמאות  תד 635  קרית אתא ",
"מצפה רמון רחוב הר עודד 5 רובע דרכי הבשמים",
"פוריה - עין הגליל צומת אלומות ",
"בית שאן  איזור תעשיה בית שאן כניסה מכביש 71",
"נצרת - מבואות  כביש נצרת - ציפורי - מבואות נצרת ",
"מפגש מכר  כביש 85 עכו צפת - מכר ",
"אלמוג  צומת אלמוג - ד. נ. יריחו  כביש 1 ",
"עוקף יוקנעם  כביש 66 עוקף יוקנעם ליד קיבוץ הזורע ",
"דבוריה בכניסה לדבוריה כביש 7266",
"שלמה - צריפין כביש 444   סמוך לשוק הסיטונאי  באר יעקב",
"רמלה הבנים רחוב הרצל 6   רמלה",
"יגאל אלון יגאל אלון 128 תל אביב ",
"הצור רעננה  רחוב נופר א.תעשיה רעננה ",
"סגולה - פת  רבינצקי 8 א. תעשייה סגולה - פת ",
"מפגש תמרה  כפר תמרה  כביש 70",
"כוכב התבור  כפר תבור כניסה מכביש 65",
"קלנסוואה  קלנסוואה כביש 5614",
"עפולה א.ת.-מזרח  א.ת המזרחי עפולה ",
"כפר אדומים  כביש י-ם יריחו צמות כפר אדומים כניסה מכביש 1",
"אשדוד בני ברית בכניסה לאשדוד  רח' בני ברית ",
"טבריה עילית  א.ת. טבריה עילית ",
"אבו סנאן  כפר אבו סנאן כביש 70",
"חורה  בכניסה לחורה ",
"סונול קיבוץ שריד קיבוץ שריד",
"מעלה אפריים מעלה אפריים כניסה מכביש 505",
"רחובות דרך יבנה דרך הים 3  רחובות ",
"רחובות קרית המדע פארק תעשיות המדע רחובות ",
"סונול האצל אצל 22 ראשלצ",
"חדרה קפלן א. ת. דרומי חדרה כניסה מכביש 4",
"חיפה-אופיר דרך בר יהודה צ'ק פוסט  חיפה ",
"חדרה גני טובה בית אליעזר",
"סונול רמת ישי א.ת. רמת ישי",
"חדרה - ענבר כביש מס' 4 חדרה ",
"אשדוד עד הלום דרך מנחם בגין  אשדוד ",
"יפו - טלאל רח' יפת 255 יפו",
"ערערה  כביש מס' 65 ואדי ערה ",
"אשקלון - אפרידר שכונת אפרידר רח צפנייה  אשקלון ",
"הרצליה אילוש שד' מנחם בגין  כביש כפר שמריהו הרצליה",
"שדה עמודים  בכניסה לעילבון כביש 65 ",
"שדרות  שדרות   סימטת הפלד 8",
"סונול רגבה מתחם ביג מושב רגבה",
"קיבוץ יגור  קיבוץ יגור ",
"קרית גת-יענקלה דרך הדרום 2  קרית גת",
"סונול קרית חיים רח' האיצטדיון 1- חיפה",
"סונול מרכז צבי מרכז צבי בקריית שמונה",
"סונול נוף הגליל שדרות מעלה יצחק מול בית חני סנטר",
"אופקים  רח' הרצל 1  א.ת. צפוני אופקים ",
"זכריה  מושב זכריה כניסה מכביש 38",
"בש - בן גוריון  דרך חברון פינת יצחק נפחא",
"בני ברק  רח' כהנמן 12  בני ברק ",
"נתיבות  באזור התעשיה נתיבות כניסה מרחוב עלי המלאכה",
"סונול ראש פינה כביש 90 ראש פינה קריית שמונה",
"סונול סתריה כביש 40 מול סתריה",
"מטולה מטולה",
"צפת - לב העיר רח' ויצמן 2  מתחם דובק ",
"פולג גיבורי ישראל גיבורי ישראל 42 פולג - נתניה ",
"כרמיאל  א. תעשיה רחוב החרושת 40   א.תעשיה כרמיאל ",
"בוקעתא בוקעתא כביש 98- רמת הגולן ",
"רחובות  מיקה צומת בילו - רחובות ",
"מיקה ראשון לציון משה לוי 7 א. תעשייה החדש רשלצ",
"הקידמה אשדוד אזור תעשייה צפוני   אשדוד",
"בית שיקמה בית שיקמה   כביש 4 ",
"מול החוף צומת אולגה חדרה",
"כאוכב כניסה מכביש 784 כפר כאוכב",
"לב יהלום רח' הרב יהודה אונטרמן א.ת ישן נתניה",
"עין בוקק  כביש 90  עין בוקק",
"שובה בכניסה לשובה מכביש 25 לכביש 232",
"סונול המשתלה בית חי כביש 77 (בין צומת בית רימון לצומת גולני)כפר כנא",
"סונול עמק חפר דרך נחל אלכסנדר",
"עמי - רשלצ רחוב רוג'נסקי פינת בסקינד ראשון לציון",
"תמרה אשקלון הפנינים 31 א. תעשייה צפוני אשקלון",
"אילת לירי רחוב הסוואר 3 א.ת תעשייה אילת ",
"סונול ירקונים רח' גזית 4 פתח תקווה",
"עמק יזרעאל רחוב ירושלים  100 עפולה",
"רום הפרדס רחוב מוטי קינד 4 רחובות ",
"כרמיאל סונול 85 כביש 85 אזור כרמיאל",
"סונול שדה תעופה רמון כביש הערבה  שדה תעופה רמון אילת",
"שונצינו שונצינו 5 תל אביב",
"המפרץ חיפה -שד' ההסתדרות",
"רמה רמת גן -ז'בוטינסקי",
"זכרון (המושבה) זכרון יעקב -נילי",
"רמתיים הוד השרון -דרך רמתיים",
"גלילות הרצליה -שד' אבא אבן ת.ד 2051 אזהת הרצליה מיקוד 46000",
"הנגב-מסמיה יואב -כביש ראשי מסמיה",
"אספסת בית שאן בית שאן -המפעלים האזוריים עמק בית שאן",
"תל חנן חיפה -בר יהודה",
"נס ציונה נס ציונה -החרש",
"אדגו/קריניס חדרה -זלמן שזר",
"שדרות הנשיא חיפה -שד' הנשיא",
"ירמולובסקי חדרה -כיכר המשטרה",
"נווה זוהר תמר -צומת נוה זוהר סדום",
"יזראמקס רמת גן -שלם 1 רג 52215",
"קריית גת החדשה קרית גת -דרך הדרום",
"גיבורי ישראל תל אביב יפו -יגאל אלון",
"תלמי הנגב שער הנגב -ביציאה הדרומית של שדרות",
"עלית רמת גן -ז'בוטינסקי 4 רמת גן",
"שעריים רחובות -הרצל 68   רחובות",
"עפולה יוקלר עפולה -חטיבה",
"נחשון מטה יהודה -צומת נחשון (כביש 44) בין רמלה לבית שמש",
"מצפה רמון מצפה רמון -בראשית",
"רמת אביב תל אביב יפו -דרך נמיר",
"מירון מירון -צומת מירון",
"עין יהב עין יהב -כביש הערבה בכניסה למושב עין יהב",
"אשקלון אשקלון -צהל",
"אפיקים עמק הירדן -בכניסה לקיבוץ אפיקים",
"קרית שמונה קרית שמונה -תל חי 18 קרית שמונה",
"נתיבות נתיבות -ירושלים",
"מפגש אולגה חדרה -ת.ד 1184  גבעת אולגה  38111",
"גילת צומת גילת -צומת גילת",
"כפר יסיף כפר יסיף -יאסיף",
"דלרום באר שבע -דרך חברון",
"השחר נתניה -כביש החוף ליד מחלף פולג",
"ארגמן עכו -בכניסה לעכו מול מלון חוף התמרים",
"דימונה דימונה -רח' הפועלים א.ת צפוני דימונה",
"רמת ישי רמת ישי -הארז",
"גינוסר עמק הירדן -קיבוץ גינוסר",
"בית חנן גן רווה -כביש 42 ליד מושב בית חנן",
"רמת-השרון רמת השרון -משה סנה 210 רמהש",
"גדרה גדרה -צומת כנות",
"מבואות חיפה חיפה -שד' ההגנה צומת דרך הים",
"ראש פינה ראש פינה -מרכז מסחרי",
,"מעיליה - מונפורט מעיליה -כפר מעיליה ת.ד. 1106",
"פונדק הרים / נווה אילן מטה יהודה -נווה אילן (בכניסה לשוק)",
"עיר שלם ירושלים -רח' הרצוג 1 צומת פת ירושלים",
"חוף הדקל נהריה -רח' העליה  נהריה",
"בית-דגן ראשון לציון -צומת בית דגן",
"דלק טבריה  (שערי טבריה) טבריה -אלחדיף",
"פרבר תל אביב יפו -שד' ירושלים",
"מובילי גוש דן אזור -דרך השבעה 19 אזור",
"שערי חולון חולון --",
"געתון נהריה -דרך העצמאות",
"קריית חיים חיפה -שד' דגניה",
"ערד ערד -בכניסה לערד",
"דלית אל כרמל דלית אל כרמל -ת.ד. 77 דלית אל כרמל  30056",
"דברת דברת -צמוד לקיבוץ דברת",
"מצה חיפה -דרך רופין חיפה",
"מסובים צומת מסובים שטח גלילי -דרך לוד (ברלב)",
"מפגש אורנים ירושלים -פייר קינג 2 תלפיות ירושלים",
"אלדור חיפה- שד' ההגנה 33",
"גולני דרום כביש צומת גולני טבריה -כביש צומת גולני דרום מזרחית לכביש 77",
"תמרה - ישנה תמרה -כביש ראשי בתוך העיר תמרה הישנה",
"עומרים באר שבע -דרך חברון",
"צומת גולני צפון הגליל התחתון -כביש 77 צומת גולני",
"מחלף זכרון יעקב זכרון יעקב -בין צומת פרדיס לכביש החוף מס' 2",
"נווה יעקב ירושלים -לאה גולדברג  נווה יעקב",
"תל שוקת בני שמעון -צומת שוקת",
"שערי ראשון ראשון לציון -טוליפמן",
"מצפה אילת אילת -יהל",
"תלפיות מזרח ירושלים -דב גרונר 271 א.ת תלפיות",
"אלונים עמק יזרעאל -חוצות אלונים",
"נצרת עלית-האיצטדיון נצרת עלית -נצרת עלית",
"נצרת עלית-האיצטדיון נצרת עלית -נצרת עלית- רחוב יזרעאל 46 .צמוד לאצטדיון כדורגל",
"קדש ברנע קציעות -מגרש",
"מגשימים דרום השרון -מושב מגשימים",
"קצרין קצרין -אזור תעשייה קצרין",
"נווה עמל הרצליה -דרך ירושלים ת,.ד. 5902",
"משאבים רמת נגב -צומת משאבי שדה",
"גוש עציון אלון שבות -ד.נ. צפון יהודה  צומת גוש עציון  כביש 60",
"ימית ראשון לציון -לישנסקי",
"עוזה שפיר -כביש 40 מול מושב עוזה",
"עוזה שפיר -כביש 40 מול מושב עוזה",
"גל הבקעה מועצה אזורית בקעת הירדן -מפגש הבקעה (כביש 90) בקעת הירדן",
"מישור אדומים מעלה אדומים -הר מחוור",
"כפר בתיה רעננה -רח' ירושלים פינת אחוזה",
"הקישון חיפה -שד' ההסתדרות",
"חלוצי התעשיה חיפה -חלוצי התעשיה 40  מפרץ חיפה 26112",
"הצבי חולון -הפלד",
"מבקיעים חוף אשקלון -מושב מבקיעים  ד.נ. חוף אשקלון",
"צ'ק פוסט חיפה -מקלף צ'ק פוסט",
"צומת אורה ירושלים -צומת אורה  ירושלים",
"פארק הרכב חיפה -שד' ההסתדרות",
"מפגש הספורט באר שבע -שד' בן גוריון 16 בש",
"מפגש צביקה מטה אשר -כביש נהריה מעלות",
"דורון כפר סבא -נתיב האבות",
"בית גוברין יואב -קיבוץ בית גוברין",
"רננית בית אריה -כביש 446 בית אריה",
"רמות גולן -מושב רמות  רמהג",
"כחל מועצה אזורית מבואות החרמון -מושב כחל ד.נ. כורזים 12387",
"אברהם מיתר מיתר -בכניסה למיתר",
"בת שלמה חוף הכרמל -כביש ואדי מילק עי בת שלמה",
"ניות הרצוג פינת שנאור",
"גבעונים גבעת זאב - ירושלים -גבעונים גבעת זאב י-ם",
"באר יעקב באר יעקב -דרך חיים",
"הר תמיר ירושלים -יעקב אליאב 1 גבעת שאול ירושלים",
"מעייני שמחה רעננה -ויצמן 273 רעננה",
"כנות באר טוביה -את כנות",
"מעבר מכמש  מטה בנימין -כניסה למעלי מחמש (ירושלים)",
"מגידו קיבוץ מגידו -צומת מגידו",
"דרך הים (יבנה) יבנה -סנהדרין 34 (פינת דרך הים)",
"לידו בית הערבה -צפון ים המלח קיבוץ בית הערבה",
"מרכבות האש חולון -המרכבה",
"עפולה העמקים עפולה -החרוד 7",
"נין התבור נין (מ. א. בוסתאן אל מרג') -כפר נין",
"ניר דוד (גן השלושה) ניר דוד -בכניסה לגן השלושה",
"אם המושבות פתח תקוה פתח תקוה -סימטת התבור 3 א.ת. סגולה פת",
"צ'ימבליסטה אשדוד -המדע",
"שפיים חוף השרון -מרכז קניות חוצות שפיים",
"מפגש השלום דרום השרון -כביש 444  ליד נווה ימין",
"איילון מטה אשר -קיבוץ איילון",
"מצר מנשה -כביש באקה בכניסה לקיבוץ",
"סיבים פתח תקוה -הסיבים",
"מבואות ראשון ראשון לציון -משה בקר",
"קרית משה רחובות -היצירה 4  א.ת רחובות",
"שערי צפת צפת -רח' הגדוד השלישי",
"קריית עקרון קרית עקרון -שד יצחק רבין",
"תל-יצחק חוף השרון -מושב תל יצחק",
"מבוא ביתר מטה יהודה -כביש 375 בכניסה למבוא ביתר",
"גל-גלי חוף עכו -משמר הים 1 עכו",
"שלומי שלומי -את שלומי",
"חורפיש חורפיש -כניסה מערבית לכפר חורפיש",
"נווה ספיר עכו -שלום הגליל",
"גל יוקנעם יוקנעם -יקנעם מושבה- אגרא",
"גל טבריה טבריה -רח' יהודה לוי  טבריה",
"גל נתניה נתניה -שד' בן גוריון",
"גל זרזיר זרזיר -זרזיר - כביש מס' 7626 -בכניסה לישוב גבעת אלה",
"דקל הזהב ראשון לציון -רח' לזרוב 35 ראשלצ",
"גל השלום (כפר קאסם) כפר קאסם -סולטני",
"גל טירה טירה -מזרח טירה כביש 551 לכיוון כוכב יאיר",
"הקדר נתניה -הקדר 31\א.ת ישן נתניה",
"מזכרת בתיה מזכרת בתיה -שד' מוטה גור",
"גל ערבה תמר -כביש 90  צומת הערבה",
"גל הראשונים אשדוד -רחוב אורט 1  אשדוד",
"שדה נחום עמק המעיינות -קיבוץ שדה נחום",
"באר טוביה באר טוביה -את באר טוביה",
"באר טוביה באר טוביה -את באר טוביה",
"גל דניאל _חוף אשקלון חוף אשקלון -הכניסה לישוב בת הדר",
"מגדל העמק מגדל העמק -הנפח",
"קפלן רמלה -פינת משה אדרת וצופית",
"רמת ישי - בליה רמת ישי -אקליפטוס 4 רמת ישי",
"ברור חיל שער הנגב -בכניסה לקיבוץ ברור חיל",
"גבעת זאב גבעת זאב -צומת גבעת זאב ירושלים",
"קולנוע אסתר אשקלון -התחיה גבעת ציון",
"שדה בוקר שדה בוקר -מדרשת בן גוריון",
"פרנס רחובות רחובות -דרך הים",
"קניאל פתח תקוה פתח תקוה -משה דיין 11 פת",
"מחלף החורשים ג'לג'וליה -בכניסה לגלגוליה(ביציאה מכביש 6)",
"זמר כפר זמר",
"סטאר סנטר אשדוד -ז'בוטינסקי מתחם סטאר סנטר",
"סגולה פתח תקוה -דוד מרכוס 5 א.ת. סגולה פת",
"שיכון עובדים באר שבע -שדרות אליהו נאוי (צמוד לשדרה השביעית BIG)",
"פוליבה רמלה -הר עצמון את נשר",
"הר יונה נצרת עלית -נצרת עלית רח' הפיריון  אזהת ג'",
"פולג נתניה -האומנות",
"פארק אפק כפר קאסם -א.ת. אפק ראש העין",
"הגביש נתניה נתניה -רח' הגביש 6 (לכיוון בית סלקום) אזהת פנחס ספיר נתניה",
"אעבלין איעבלין -בכניסה לכפר אעבלין",
"רמלה קלאוזנר רמלה -קלאוזנר",
"ניר עם שער הנגב -בכניסה לקיבוץ ניר עם",
"חצור הגלילית חצור הגלילית -אזור תעשיה חצור הגלילית",
"התמר רעננה -הנופר 2  רעננה",
"קרית אתא קרית אתא -דרך חיפה",
"נינה הוד השרון -הפטיש",
"קריית מלאכי קרית מלאכי -פקר",
"כפר קרע כפר קרע -צומת כפר קרע",
"נהלל עמק יזרעאל -צומת נהלל בכניסה לישוב מנשיה זבדה",
"יאנוח יאנוח -כניסה צפונית כפר יאנוח",
"כרמיאל החדשה כרמיאל -מעלה כמונים",
"צליל החורש בקעת בית הכרם -כביש 85 כרמיאל עכו לכוון עכו",
"קציר ערערה -צומת קציר ברטעה",
"שבעת הכוכבים הרצליה -יוסף נבו  (מול קניון שבעת הכוכבים)",
"דלק מבואות דליה עוספיא -כביש עוקף דלית אל כרמל",
"דלק השרון - קלאנסואה קלאנסווה -א.ת. קלנסווה  כביש ראשי",
"השוק הסיטונאי באר יעקב -צומת ניר צבי  את צריפין",
"בני ברק-אמיר בני ברק -הירקון 10 בני ברק",
"יד בנימין נחל שורק -בכניסה למושב יד בנימין",
"שדה תרומות (ביכורה) עמק המעיינות -מושב שדה תרומות  (כביש 90)",
"הנצח תל מונד לב השרון -כניסה דרומית מבני דרור לתל מונד",
"הנצח תל מונד לב השרון -כניסה דרומית מבני דרור לתל מונד",
"שדה עוזיה באר טוביה -בכניסה למושב שדה עוזיה",
"מנוחה לכיש -צומת קוממיות בפניה לקיבוץ גלאון (בכניסה לכביש 353 מכביש 40)",
"צוף ים אילת -אזור התעשיה",
"מחניים הגליל העליון -כניסה לקיבוץ מחניים צומת מחניים",
"עמק שרה באר שבע -פארק אופיק קריית יהודית בש",
"קסטל מבשרת ציון -שדרות החוצבים 42 מבשרת ציון",
"טבריה ארזים טבריה -הפנס אזור תעשיה ד'",
"שנקר פתח תקוה -רח' שנקר 8 פתח תקווה",
"יהוד יהוד -העצמאות",
"דלק אולניק (עמק חפר) עמק חפר -צבי הנחל 2  פארק תעשיות עמק חפר",
"פארק צרעה מטה יהודה -אזהת פארק צרעה סמוך לבית שמש וקיבוץ צרעה",
"עוקף חדרה חדרה -כביש 65 בין הכניסה המערבית למזרחית של חדרה",
"סער מטה אשר -בכניסה לקיבוץ סער ליד נהריה",
"חרמש חיפה -חרמש 26   אזור תעשייה צ'ק פוסט  חיפה",
"אשדוד בב (בני ברית) אשדוד -כביש בני ברית (בכניסה הצפונית לעיר)",
"מינואט כפר קאסם -לב הארץ א.ת. ראש העין",
"מודיעין ארז מודיעין -צומת שילת  כביש 443",
"מודיעין יער (101) מודיעין -השדרה המרכזית",
"אופקים אופקים -פארק אפיקים  את אופקים",
"בול אשדוד אשדוד",
"דלק יגל באר שבע -הכשרת הישוב 8  עמק שרה באר שבע",
"הכישור חולון",
"טירת הכרמל טירת הכרמל -הרצל",
"קאונטרי באר שבע באר שבע",
"נאות חובב נאות חובב -כביש 40  צומת נאות חובב",
"מג'דל שמס"];
  
let list = document.getElementById("myUL");
  
data.forEach((item)=>{
var a = document.createElement("a");
var newItem = document.createElement("li");
a.textContent = item;
a.setAttribute('href', "#");
newItem.appendChild(a);
list.appendChild(newItem)
})

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}