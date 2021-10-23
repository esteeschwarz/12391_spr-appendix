/*
 * Title: jespr-sample1.js
 * Author: Ralph L. ROSE
 * E-mail address: rose@waseda.jp
 * Description: This file defines an experimental design to be used in a
 * JESPR experiment.
 * License: The MIT License (MIT)
 */


var jesprExperimentDesignForKey = { //actuel 11284///// items in: 2,5,6,10,11,12,18,26
    "title": "GROUP 1: self paced essai",
    "investigators":[ {
        "primary": "ESTEE"
    }, {
        "other": ""
    }],
    "font-name": "courier",
    "font-size": "14",
    "text-color": "black",
    "background-color": "lightgray",
    "display": "moving-window",
    "orientation": "horizontal",
    "masking-character": "*",
    "fixation-character": "X",
    "min-instruction-time": "500",
    "show-progress-bar": "true",
    "input-method": "keyboard",
    "quote-mark": "double_quote",
    "show-results-display": "true",
    "show-log-display": "true",
    "feedback-options":[ {
        "name": "correct",
        "string": "gut",
        "text-color": "green"
    }, {
        "name": "incorrect",
        "string": "naja",
        "text-color": "red"
    }],
    "instruction-screens":[ {
        "id": "instruction1",
        "string": "testrun 001"
    }, {
        "id": "instruction2",
        "string": "just check time count"
    }],
    "instruction-screens":[ {
        "id": "instruction1",
        "string": "press [space] to continue. [leertaste] drücken, um weiterzugehen."
    }, {
        "id": "instruction2",
        "string": "Wenn das X erscheint, drücken Sie bitte jedesmal die Leertaste. Dann erscheint der nächste Text."
    }],
    "practice-stimuli": {
        "order": "fixed",
        "items":[ {
            "item": {
                "id": "practice01",
                "string": "Sie bekommen im Folgenden ein paar Texte zu sehen. Jedesmal, wenn Sie die Leertaste drücken, wird ein neuer Abschnitt aufgedeckt.| Es ist notwendig, die einzeln erscheinenden Abschnitte aufmerksam zu lesen.",
              /*    "prompt": "Haben Sie alles verstanden?",
                "options":[ {
                    "string": "Ja.",
                    "feedback": "gut."
                }, {
                    "string": "Nein.",
                    "feedback": "Nicht so schlimm. Versuchen Sie es trotzdem..."
                }]*/
            }
        }, {
            "item": {
                "id": "practice02",
                "string": "Lassen Sie sich Zeit, die Texte und Fragen genau zu lesen.| Lesen Sie dies dennoch im gewohnten Tempo.",
             /*    "prompt": "Haben Sie alles verstanden?",
                "options":[ {
                    "string": "ja.",
                    "feedback": "Gut. Dann können wir jetzt beginnen."
                }, {
                    "string": "nicht so.",
                    "feedback": "Na gut. Versuchen Sie den Test trotzdem."
                }]*/
            }
            
          
            
        },   {
            "item": {
                "id": "practice03",
                "string": "Es geht bei den folgenden Texten nicht um schnelles Lesen.| Ihre Lesegeschwindigkeit wird zwar erfasst, hat aber keinen Einflusz auf den weiteren Verlauf des Tests.| Sie können den Test auch jederzeit abbrechen.",
             /*    "prompt": "Sind Sie schon gespannt, oder?", 
                "options":[ {
                    "string": "ja, sehr.",
                    "feedback": "okay. dann gehts gleich los."
                }, {
                    "string": "naja...",
                    "feedback": "fangen wir jetzt trotzdem mal an..."
                }]*/
            }
        
        }
        ]
    },
    "post-practice-instruction-screens":[ {
        "id": "instruction3",
        "string": "Lesen Sie:"
    }],    "experiment-stimuli": {    // endklammern begin of groups:  ] } } ] }
        "order": "fixed",
        "merge": "true",///-true
        "stimuli-sets": [             //   /
        {
                "stimuli-set": {
                    "name": "all",
                    "order": "random",   //-fixed  (mit random werden alle stimuli incl. filler global randomisiert)
                    "merge": "true", ///-true
                    "groups": [
                        {
                            "group": {
                                "name": "EM",
                                "order": "fixed",
                                "items": [
                                    {
                                        "item": {
                                            "id": "EM1",
                                            "tags": [ "RUB", "1EM" ],
                                            "string": "Nach Marthas Meinung war Depression eine Kröte,| die schmierig auf deinem Kopf hocken konnte,| bis sie endlich die Energie aufbrachte, herunterzurutschen.| Die Traurigkeit aber, in  der sie die letzten zehn Tage verbracht hatte,| war eine andere.| Hektisch und aggressiv.| {Mit scharfen Krallen.}| Sie hatte nicht auf ihr gesessen,| sondern sie überfallen.",
                                            
                                         /*     "prompt": "1): Beschreibt die Textpassage Martas Leiden an Symptomen einer psychischen Störung? B: Beschreibt die Textpassage, dass Marta von einem Tier attackiert wird?",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "gut"
                        },
                        {
                                               "string": "B",
                                               "feedback": "auch gut!"
                        }
                    ]*/
                                        }
                                    },
                                      { 
                                        "item": {
                                            "id": "EM2",
                                            "tags": [ "RUB", "2EM"],
                                            "string": "Johns Ehrgeiz im Büro war ein Rennwagen.| Er nutzte jede Gelegenheit, die sich ihm bot,| um seine RivalInnen zu überholen und seine TeamkollegInnen herauszufordern.| Auf der Rennstrecke kämpfte er Runde um Runde,| {bis von der Tribüne stehende Ovationen kamen.}| Johns Chef lobte ihn für seine Siege,| aber insgeheim fragte er sich,| ob John je die Ziellinie erreichen würde.",
                                        /*         "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                      {
                                        "item": {
                                            "id": "EM3",
                                            "tags": [ "RUB", "3EM" ],
                                            "string": "Helen sprach mit dem beruhigenden Tonfall einer erfahrenen Heilerin.| Wenn sie in der richtigen Stimmung war,| hatten ihre Worte eine weiche Schärfe,| die auf magische Weise von allen Beschwerden heilen konnte,| ganz ohne Medizin.| Wenn sie aber der Meinung war,| dass ihr Zuhörer eine Behandlung nötig hatte,| {setzte sie ihr Skalpell nah an dessen Herzen an,}| so dass er von der langen Klinge eines ‚Warum‘| oder der unheilbaren Stille eines Punktes verwundet würde.",
                       /*                        "prompt": "(1): Beschreibt die Textpassage Helens berührende und klare Ausdrucksweise, ihre direkte Art der Kommunikation? (2): Beschreibt die Textpassage, dass Helen ihren Zuhörern die Herzen aufschneidet?",
                                              "options": [
                                          {
                                               "string": "(1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "(2)",
                                               "feedback": "auch gut."
                        }
                        
                    ]*/
                                        }
                                    }, 
                                    {
                                        "item": {
                                            "id": "EM4",
                                            "tags": [ "RUB", "4EM" ],
                                            "string": "War die Resonanz zwischen Gina und ihren Angestellten gut,| konnten sie großartige Dinge zusammen erreichen.| Sie waren ein Chor in perfekter Harmonie;| die zarten Töne des Soprans fügten sich perfekt ein| in das mächtige Donnern der Bässe.| Nach der Performance musste Gina lediglich| {die Blumen aufsammeln, die man auf die Bühne geworfen hatte.}| Wenn sie jedoch unkooperativ waren,| war die sich ergebende Kakophonie| ein Angriff auf die Sinne.",
                       /*                          "prompt": "1): Beschreibt die Textpassage, dass Ginas Unternehmen sehr erfolgreich ist, wenn ihre Mitarbeiter bereitwillig im Team zusammenarbeiten? B: Beschreibt die Textpassage, die gelungenen und mit Blumen gepriesenen Auftritte von Ginas Chorensemble?",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "B",
                                               "feedback": "okay."
                        }
                    ]*/
                                        }
                                    }, 
                                    
                                     {
                                        "item": {
                                            "id": "EM6",
                                            "tags": [ "RUB", "6EM" ],
                                            "string": "Die SchülerInnen der Schule waren notorisch widerspenstig.| Es war wie im Zoo.| Neue PflegerInnen wurden in der Regel den harmlosen Tieren zugeteilt:| den gezähmten Ziegen,| den gelassenen Giraffen,| den lustigen Pinguinen.| {Tieren, mit denen man ohne Schutzhandschuhe arbeiten konnte.}| Es waren sowohl die intelligenteren| als auch die aggressiveren Tiere,| die zusätzliche Sicherheitsmaßnahmen erforderten.",
                       /*                          "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },   

   {
                                        "item": {
                                            "id": "EM5",
                                            "tags": [ "RUB", "5EM" ],
                                            "string": "Louise hatte bemerkenswerte geistige Fähigkeiten.| Ihr Gehirn war ein Computer, in dem jede Datei fein säuberlich im entsprechenden Verzeichnis gespeichert war| und auf Knopfdruck abgerufen und bedient werden konnte.| {Doch in letzter Zeit kam es gelegentlich zu Stromausfällen.}| Plötzlich war sie nicht mehr in der Lage,| auf die einfachste Anfrage zu reagieren.",
                       /*                           "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },   

                                    {
                                        "item": {
                                            "id": "EM16",
                                            "tags": [ "RUB", "16EM" ],
                                            "string": "Martin nahm es nicht so genau mit der Uhrzeit.| Heute ist er zum Essen bei seinem Freund eingeladen.| Martin wusste, dass sein Freund Hackfleisch aus ihm machen würde,| wenn er zu spät kommt.| Sein Freund erinnerte ihn heut schon mehrmals per SMS,| {er konnte den Braten schon riechen.}| Ich esse dich zum Frühstück,| wenn du nicht kommst,| meinte sein Freund.| Martin fühlte sich zwar wie Wackelpudding,| schaffte es aber, rechtzeitig zu seinem Freund zu fahren.",
                       /*                         "prompt": "Wie fassen Sie ‚den Braten riechen‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    },         
                                    
                                    {
                                        "item": {
                                            "id": "EM7",
                                            "tags": [ "RUB", "7EM" ],
                                            "string": "Ronja war in etwa so beweglich wie ein Baum.| Der Apfel fällt nicht weit vom Stamm und Ronjas Schwester war| {aus demselben Holz geschnitzt}| wie Ronja und ihr Vater.| Nur ihre Mutter war eher ein Springkraut:| flexibel, beweglich, kann in kürzester Zeit ganze Flächen besiedeln.| Ronja musste trotzdem am Sportunterricht teilnehmen.| Und obwohl sie wie ein Felsen dastand,| hatte sie mehr Spaß am Sport als alle anderen zusammen.",
                       /*                         "prompt": "Wie fassen Sie ‚aus dem selben Holz geschnitzt‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    },             
                                    
                                    {
                                        "item": {
                                            "id": "EM8",
                                            "tags": [ "RUB", "8EM" ],
                                            "string": "Silas war Börsenmakler in einem eher kriminellen Unternehmen.| Er war derjenige speziell für die dreckigsten Tricks| beim Kundenfang und Spekulieren.| Es war für ihn kein Problem,| {sich die Hände schmutzig zu machen.}| Er liebte das Schmutzige.| Erst die Finanzkrise setzte dem sudeligen Sumpf seiner Firma ein Ende:| Erst ging die Firma pleite,| dann schließlich Silas.| Mittlerweile berät er die Börsenaufsicht| und teilt seine schmutzigen Geheimnisse.",
                       /*                         "prompt": "Wie fassen Sie ‚sich die Hände schmutzig machen‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    },          
                                    
                                    {
                                        "item": {
                                            "id": "EM9",
                                            "tags": [ "RUB", "9EM" ],
                                            "string": "Sören war ein Glückspilz und lebte so leicht wie eine Feder.| Aus heiterem Himmel wurde er reich,| all seine Probleme wurden ohne großen Wirbel einfach weggeweht| und er sprüht nur so vor Ideen.| Sören und das Glück.| {Es flog ihm zu.}| All das, ohne dass er dem Glück je entgegenfliegen musste.| Sören lebte mit den Winden, sagen einige,| manche nannten ihn Luftikus.| Verflogen hat er sich jedoch nie.",
                       /*                         "prompt": "Wie fassen Sie ‚es flog ihm zu‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    }, 
                                    
                                    {
                                        "item": {
                                            "id": "EM10",
                                            "tags": [ "RUB", "10EM" ],
                                            "string": "Merve ist seit kurzem verliebt und nur noch auf fernen Planeten anzutreffen.| Es geschah ohne Countdown ziemlich schnell vor zwei Wochen.| Sie sagt, dass es etwa 3 Sekunden dauerte| und schon hatte sie die Umlaufbahn verlassen.| {Sie schwebte durch den Raum.}| Seither ist um sie herum alles voller Sternenstaub und Glitzer.| Dennoch hat Merve ein wenig Angst, was sie von Zeit zu Zeit doch dazu zwingt,| auf dem Planeten zu landen, um sich ein wenig zu erden.",
                       /*                          "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    }, 
                                    
                                    {
                                        "item": {
                                            "id": "EM11",
                                            "tags": [ "RUB", "11EM" ],
                                            "string": "Petra verlor sich gerne in Träumen und Ideen.| Sie liebte diese Trunkenheit, während sie sich z.B. Geschichten ausdachte.| Dabei schunkelt sie lange zwischen den möglichen Wendungen und Ausdrücken.| Sie betrank sich richtig mit Geschichten und war danach wie verkatert.| {Es waren heftige Räusche.}| Sie war süchtig danach und schaffte es, trotz all der kreativen Torkelei auf dem Weg, Schriftstellerin zu werden.",
                       /*                        "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    }, 
                                    
                                    {
                                        "item": {
                                            "id": "EM12",
                                            "tags": [ "RUB", "12EM" ],
                                            "string": "Nach 10 Jahren im gleichen Beruf wagte Harry den Sprung in die Freiheit| und breitete seine Flügel aus.| Endlich konnte er die Welt von oben sehen,| in die Weite blicken und sich losreißen von seinem dunklen Tal aus Akten.| Doch Harry flog so weit in die Höhe, dass er die Kraft verlor.| {Es war ein turbulenter Fall.}| Harry ging pleite und musste wieder von Neuem das Fliegen lernen.| Dennoch blieb er optimistisch und bereute seinen Sprung nicht.",
                       /*                          "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    }, 
                                    
                                     {
                                        "item": {
                                            "id": "EM13",
                                            "tags": [ "RUB", "13EM" ],
                                            "string": "Peters Reiseberichte waren für die Zuhörer| ein Gewitter aus Klang.| Mit jeder Wendung in den Erzählungen| wurden sie in neue Symphonien gerissen.| Sein Erscheinungsbild war explosiv| und passte zu der Musik seiner Geschichten.| {Es hatte eine gute Resonanz.}| Verband sich gut und ergab zusammen eine ganze Oper,| der man als Zuschauer beiwohnen konnte.| Man bekam das Gefühl,| der Korpus seiner Geschichten zu sein.",
                       /*                         "prompt": "Wie fassen Sie ‚gute Resonanz‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    }, 
                                    
                                    {
                                        "item": {
                                            "id": "EM14",
                                            "tags": [ "RUB", "14EM" ],
                                            "string": "Lea hatte sich angewöhnt,| ihren Bruder Matti nur noch als das Grab der Familie vorzustellen,| seit dieser immer mehr in den dunklen Machenschaften einer Bande Kleinkrimineller aufging.| Er empfand sein neues Leben hingegen durchaus als Bereicherung.| {Er würde das Gold der Familie versilbern,}| meinte sie, aber er hatte keine Ahnung,| warum sie ihm das vorwarf.",
                       /*                          "prompt": "Sind Sie auch der Meinung, das Familiengold sollte besser nicht versilbert werden?",
                                              "options": [
                                          {
                                               "string": "A: Ja",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "B: Das ist egal, Lea geht es um etwas anderes.",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    },      
                                    
                                     {
                                        "item": {
                                            "id": "EM15",
                                            "tags": [ "RUB", "15EM" ],
                                            "string": "Julie war nach Julians Aussage eine heiße Olle,| die er nicht, ohne sein Bein zu heben,| an der Ecke würde stehengelassen haben -| wenn sie einmal beim Sex auf ihn warten würde.| So aber wie die Dinge lagen,| konnte er stets nur zusehen,| wie sie schon den nächsten vernaschte, statt zu warten,| {bis er denn endlich gekommen war.}| Sie sah das ganze etwas lockerer.",
                       /*                           "prompt": "Finden Sie es schlimm, wenn jemand zu spät zu einem Date kommt? 1) Jein 2) Ich glaube, es geht hier um etwas anderes.",
  "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                     
                    ]*/
                                        } 
                                    }   , //}]}}
                                         
                                          {
                                        "item": {
                                            "id": "EM17",
                                            "tags": [ "RUB", "17EM" ],
                                            "string": "Esra wollte ihren ehemaligen Arbeitgeber vor Gericht in Frikassee verwandeln.| Doch sie wusste nicht, dass die Firma sich von einem der gefährlichsten Raubtiere vertreten ließ.| Keines seiner Opfer war je von ihm verschont worden.| {Der Anwalt war ein Hai.}| Wie irgendjemand überhaupt mit ihm leben konnte, war ihr ein Rätsel.",
                       /*                         "prompt": "Warum taucht in der Geschichte ein Hai auf? 1) Es geht um die brutale Rhetorik des Rechtsvertreters. 2) Der Rechtsvertreter frisst seine Gegner auf.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    },      
                                    
                                      {
                                        "item": {
                                            "id": "EM18",
                                            "tags": [ "RUB", "18EM" ],
                                            "string": "Was die Probleme in seinem Land anging, war Lars stets ein Träumer gewesen,| {bis Xenia ihn wachrüttelte.}| Seine Augen waren noch etwas verklebt, er schaute recht schläfrig drein.| Dennoch schien die Schlafenszeit nun zu ihrem Ende gekommen zu sein.| Denn auch wenn es schon spät war, lohnte es sich noch immer, hinaus in die Welt zu gehen.",
                       /*                         "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },      
                                    
                                       {
                                        "item": {
                                            "id": "EM19",
                                            "tags": [ "RUB", "19EM" ],
                                            "string": "Hegels Vorstellung vom dialektischen Idealismus war eine Kopfgeburt gewesen.| Generationen von PhilosophInnen bekamen Kopfschmerzen von einem derartig schwindelerregenden Konstrukt.| Zum Glück wurde Hegel endlich durch Marx| {vom Kopf auf die Füße gestellt.}| So ließ er sich jedenfalls lesen.",
                       /*                         "prompt": "Warum stellt Marx Hegel auf die Füße? 1) Er setzt sich mit Hegels Philosophie auseinander und dreht ihre Kerngedanken um. 2) Er muss eine Korrektur an Hegels Körperhaltung vornehmen.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    },      
                                       
                                              {
                                        "item": {
                                            "id": "EM20",
                                            "tags": [ "RUB", "20EM" ],
                                            "string": "Eigentlich sollten die Figuren im Regal dafür sorgen,| dass Erna stets alle Hände voll zu tun hatte, wenn sie staubwedelnd durch die Wohnung fegte.| Die Putzfee hatte jedoch ein Geistesblitz ereilt,| als sie einmal zufällig lange genug vor einem der Staubfänger verweilt war.| {Man musste bei manchen Sachen einfach ein Auge zudrücken,}| dann säuberten sich die Regale wie von sebst.| Ihre Kinder waren ohnehin blind für den Schmutz.",
                       /*                         "prompt": "Versuchen Sie, zu beantworten, warum <ein Auge zugedrückt> werden soll: 1) Damit man den Dreck nicht sieht. 2) Weil man nicht immer alles perfekt machen muss.",
                                              "options": [
                                          {
                                               "string": "(1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "(2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    },      

  {
                                        "item": {
                                            "id": "EM21",
                                            "tags": [ "RUB", "21EM" ],
                                            "string": "Inge fiel es schwer den Tatsachen ins Gesicht zu sehen.| Sie war alt wie ein Stein.| Jedes Mal, wenn sie ihre Tochter sah, | {wurde ihr der Spiegel vorgehalten.}| Die Jahre hatten tiefe Spuren hinterlassen.",
                       /*                         "prompt": "Wie interpretieren Sie die Satzsequenz: ‚wurde ihr der Spiegel vorgehalten‘? Welche Bedeutung stimmt hier eher? 1) Inges Tochter trägt immer einen Spiegel bei sich. 2) Die Erscheinung der Tochter erinnert Inge immer wieder daran, wie alt sie ist. ",
                                              "options": [
                                          {
                                               "string": "(1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "(2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    }  ,
                                    
                                    {
                                        "item": {
                                            "id": "EM26",
                                            "tags": [ "RUB", "26EM" ],
                                            "string": "Jede neue Information wurde von Erna wie ein Buch in ihr mentales Bücherregal gestellt.| Die Abteilung für Naturwissenschaften war besonders gut sortiert.| {Erna war eine wandelnde Bibliothek.}| Wenn es darauf ankam, konnte sie immer auf dieses Archiv zurückgreifen.| Immerhin hatte sie dort sämtliche Einträge von ‚A‘ wie ‚Amalgam‘ bis ‚Z‘ wie ‚Zentrifugalkraft‘ gelagert.",
                       /*                          "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    }  

                                         ]
                            }
                        },
                              {
                            "group": {        
                                "name": "SM",
                                "order": "fixed",
                                "items": [
                                    
                                    
                                    
                                    {
                                        "item": {
                                            "id": "SM1",
                                            "tags": [ "RUB", "1SM" ],
                                            "string": "Martha wußte, was Depression war.| Oft hatte sie schlechte Zeiten,| da sie nichts tun wollte und Probleme hatte,| aus dem Bett zu kommen.| Die Traurigkeit der letzten zehn Tage jedoch war sehr anders.| {Hatte scharfe Krallen.}| Es war klar, daß Martha sich diesmal professionelle Hilfe suchen müßte.",
                       /*                         "prompt": "1) Beschreibt die Textpassage einen durch eine psychische Störung hervorgerufenen Leidensdruck? 2) Beschreibt die Textpassage gefährliche Merkmale eines Tieres?",
                                              "options": [
                                          {
                                               "string": "(1)",
                                               "feedback": "okay"
                        },
                        {
                                               "string": "(2)",
                                               "feedback": "okay"
                        }
                    ]*/
                                        }
                                    },
                                    
                                     {
                                        "item": {
                                            "id": "SM2",
                                            "tags": [ "RUB", "2SM" ],
                                            "string": "John war im Büro grenzenlos ehrgeizig.| Alles, was er bei der Arbeit tat,| war Teil einer Strategie,| um eine weitere Beförderung zu bekommen.| Er war sehr wettbewerbsorientiert| und erwartete immer,| {dass von der Tribüne stehende Ovationen kamen.}| Sein Chef war mit Johns Arbeit zufrieden,| aber seine Kollegen waren seinen Ehrgeiz leid.",
                       /*                          "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                     {
                                        "item": {
                                            "id": "SM3",
                                            "tags": [ "RUB", "3SM" ],
                                            "string": "Helen war sehr wortgewandt.| Sie erklärte immer alles klar und ausführlich genug,| um es interessant zu machen.| Wenn man Hilfe brauchte,| konnte sie einem mit wenigen Worten die Perspektive wiedergeben.| Aber ihre Worte konnten auch sehr durchdringend sein.| {Dann setzt sie ihr Skalpell nahe an deinem Herzen an}| und ihre Worte lassen dich noch tagelang den Schmerz spüren.",
                       /*                         "prompt": "1): Beschreibt die Textpassage Helens berührende und klare Ausdrucksweise, ihre direkte Art der Kommunikation? 2) Beschreibt die Textpassage, dass Helen ihren Zuhörern die Herzen aufschneidet?",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        }
                                    }, 
                                    
                                      {
                                        "item": {
                                            "id": "SM4",
                                            "tags": [ "RUB", "4SM" ],
                                            "string": "Wenn Ginas Angestellte kooperativ waren,| konnten sie großartige Dinge zusammen erreichen.| Sie ergänzten einander auf wunderbare Weise;| die Vorstellungen der kreativen Denker wurden verwirklicht| durch die Mühen der fleißigen Arbeiter.| Zu solchen Anlässen musste Gina lediglich| {die Blumen aufsammeln, die man auf die Bühne geworfen hatte.}| Wenn sie jedoch unkooperativ waren,| dann versank die Firma rasch im Chaos.",
                       /*                        "prompt": "1) Beschreibt die Textpassage, dass Ginas Unternehmen sehr erfolgreich ist, wenn ihre Mitarbeiter bereitwillig im Team zusammenarbeite ? 2) Beschreibt die Textpassage Ginas Tätigkeit Blumensträuße von der Bühne zu räumen?",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        }
                                    }, 
                                    
                                    {
                                        "item": {
                                            "id": "SM6",
                                            "tags": [ "RUB", "6SM" ],
                                            "string": "Die SchülerInnen der Schule waren notorisch widerspenstig.| Neue LehrerInnen wurden in der Regel den weniger störenden Klassen zugeteilt:| den jüngeren, ruhigeren und entspannten Kindern.| Sie machten selten Ärger|, {sodass man ohne Schutzhandschuhe mit ihnen arbeiten konnte.}| Es waren sowohl die intelligenteren| als auch die auffälligen SchülerInnen,| die eine spezielle Betreuung benötigten.",
                       /*                               "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },    
                                    
                                      {
                                        "item": {
                                            "id": "SM5",
                                            "tags": [ "RUB", "5SM" ],
                                            "string": "Louise hatte bemerkenswerte geistige Fähigkeiten.| Sie besaß ein beeindruckendes Wissen über Fakten| und konnte in überwältigender Geschwindigkeit Informationen liefern und darüber nachdenken.| {In letzter Zeit kam es jedoch gelegentlich zu Stromausfällen.}| Plötzlich war sie nicht mehr in der Lage,| auf die einfachste Anfrage zu reagieren",
                       /*                               "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },    

                                    {
                                        "item": {
                                            "id": "SM16",
                                            "tags": [ "RUB", "16SM" ],
                                            "string": "Martin kam heute wieder spät von der Arbeit nach Hause.| Er musste in letzter Zeit viele Überstunden machen.| Es gab ein Server-Problem,| das seine Abteilung nicht lösen konnte.| Stundenlang las er sich durch Tutorials,| und arbeitete an einem Code.| {Er konnte den Braten schon riechen.}| Es musste etwas mit dem Basis-Code zu tun haben.| Vorhin konnte er einen Weg finden,| die verlorenen Daten wiederherzustellen.| Martin bekam zum Dank zwei Tage frei.",
                       /*                         "prompt": "Wie fassen Sie ‚den Braten riechen‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    },             
                                    
                                    
     {
                                        "item": {
                                            "id": "SM7",
                                            "tags": [ "RUB", "7SM" ],
                                            "string": "Ronja ist schon lange als Botanikerin in der Forschung tätig.| Nicht immer ist sie zufrieden mit den Bedingungen.| Dennoch ist es ihre große Leidenschaft.| {Sie ist aus demselben Holz geschnitzt}| wie ihre Mutter.| Pflanzen waren sehr präsent in Ronjas Kindheit.| Früh fing sie damit an, Blüten zu pressen.| Sie hat immer noch fünf Umzugskisten| mit gepressten Blüten aus dieser Zeit.| Mittlerweile interessiert sie sich vor allem| für Pflanzenphysiologie und Biochemie.",
                       /*                         "prompt": "Wie fassen Sie ‚aus dem selben Holz geschnitzt‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    },             
                                    
                                    {
                                        "item": {
                                            "id": "SM8",
                                            "tags": [ "RUB", "8SM" ],
                                            "string": "Silas ist Kriminologe und interessierte sich| schon seit seiner Kindheit für Kriminalfälle.| Da Silas gleichzeitig ein Interesse an den Naturwissenschaften entwickelt hat,| war Kriminologie das Beste was er studieren konnte.| Er wollte schon immer wissen,| wie es dazu kommt, dass Menschen| {sich die Hände schmutzig machen.}| Das Motiv, die inneren Konflikte,| und natürlich mit welcher Technik Täter gefasst werden.| Am meisten fasziniert ihn die DNA,| also wie etwas so kleines zu so wichtigen Spuren führen kann.",
                       /*                         "prompt": "Wie fassen Sie ‚sich die Hände schmutzig machen‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    },             
                                    
                                    {
                                        "item": {
                                            "id": "SM9",
                                            "tags": [ "RUB", "9SM" ],
                                            "string": "Sören war eigen,| und hatte viele unterschiedliche Eigenschaften.| Wie Beppo in dem Roman Momo von Michael Ende| hatte Sören die Leidenschaft,| zu fegen.| Bei Sören war es sogar so:| Egal wie komplex die Aufgabe war,| oder wie lange sie dauerte,| Sören fand die Ruhe dafür.| {Es flog ihm zu.}| Mit anderen Sachen hatte Sören wiederum Schwierigkeiten.| Seine Leidenschaften kann er nicht immer gut teilen.| Dennoch fand Sören immer wieder Gesellschaft,| z.B. bei Modellbauern.",
                       /*                         "prompt": "Wie fassen Sie ‚es flog ihm zu‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    },             
                                    
                                     {
                                        "item": {
                                            "id": "SM10",
                                            "tags": [ "RUB", "10SM" ],
                                            "string": "Merve träumt davon Kostümdesignerin zu werden.| Sie konzipiert gerne die buntesten Kleider.| Sie liebt die Unterschiede der Menschen.| Es ergeben sich dadurch viele Design-Möglichkeiten.| Derzeit schneidert sie am liebsten Kleider| für ihre langjährige Freundin und Sängerin Anna.| Sie habe ein sehr besonderes Auftreten, sagt Merve,| {denn sie schwebe durch den Raum.}| Merve gefallen solche Momente| und sie genießt ihren Beruf daher sehr, auch wenn es nicht immer leicht ist in dem Bereich.",
                       /*                          "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    }, 
                                    
                                    {
                                        "item": {
                                            "id": "SM11",
                                            "tags": [ "RUB", "11SM" ],
                                            "string": "Petra besuchte letzte Woche ihr Lieblingsmuseum, in dem sie schon lange nicht mehr gewesen war.| Sie verbrachte Stunden damit,| sich die Bilder, Kunstwerke, Ausstellungstücke und Info-Texte durchzulesen| und alles in Erfahrung zu bringen, was sie konnte.| {Es war ein heftiger Rausch.}| Petra vergaß schnell die Zeit und wurde fast im Museum eingeschlossen,| doch der Hausmeister bemerkte sie zum Glück noch rechtzeitig.",
                       /*                               "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    }, 
                                    
                                    {
                                        "item": {
                                            "id": "SM12",
                                            "tags": [ "RUB", "12SM" ],
                                            "string": "Harry machte vor Jahren viel Geld mit Gewinnspielen und hatte ein sorgenfreies Leben: Alles lief super.| Doch dann machte er schwere Verluste.| Sehr schnell bekam Harry finanzielle Probleme,| der Stress wurde zu viel und er konnte nicht mehr.| {Es war ein turbulenter Fall.}| Harry hatte sich übernommen und verlor alles.| Er fand jedoch auch danach wieder seinen Weg| und sucht heutzutage den Spaß am Risiko höchstens noch in Videospielen.",
                       /*                               "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    }, 
                                    
                                    {
                                        "item": {
                                            "id": "SM13",
                                            "tags": [ "RUB", "13SM" ],
                                            "string": "Peter beschäftigt sich viel mit bildender Kunst.| Er sucht gerne nach ganz besonderen Details| in den Techniken der Künstler| und stellt sich vor, wie es ist, ein großes Kunstwerk zu malen.| Besondere Kunst findet Peter| aber auch an ganz unscheinbaren Orten.| Gestern ging Peter durch die Straße| und begegnete einem tollen Werk.| {Es hatte eine gute Resonanz.}| Peter mochte solche Ereignisse im Alltag.| Kunst ist überall.",
                       /*                         "prompt": "Wie fassen Sie ‚gute Resonanz‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    }, 
                                    
                                    {
                                        "item": {
                                            "id": "SM14",
                                            "tags": [ "RUB", "14SM" ],
                                            "string": "Lea hatte sich angewöhnt,| von ihrem Mann Jakob nur noch als dem blöden Schäfer zu sprechen,| seit er begonnen hatte,| die schwarzen Schafe der Familie ihres Vaters| und die weißen Schafe der Familie ihres Onkels| gemeinsam inmitten eines Birkenhains zu tränken –| denn diese Schafe brachten nach ihrer Meinung nur minderwertige| schwarzweiß gescheckte Lämmer zur Welt.| {Sie warf ihm vor, das Gold der Familie zu versilbern,}| aber er weiß nicht, wovon sie spricht.",
                       /*                         "prompt": "Denken Sie, Lea hat recht: 1) Ja, wer will schon schwarzweiße Wolle kaufen. 2) Nein, denn vielleicht weiß er dann besser, welche Lämmer ihm gehören.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    },             
                                    
                                    {
                                        "item": {
                                            "id": "SM15",
                                            "tags": [ "RUB", "15SM" ],
                                            "string": "Julie hatte definitiv die Nase voll von Julian.| Es war ein heftiger Streit zwischen den beiden entbrannt,| der wie immer darin endete,| daß er türenschlagend das Haus verließ.| Doch wie auch sonst, stand er am nächsten Morgen| mit seiner Sporttasche wieder in der Tür,| ließ die Demütigungen über sich ergehen| und sie hatte auch ihre Ruhe,| {als er dann endlich gekommen war.}| Irgendwie vertrugen sie sich doch jedesmal wieder.",
                       /*                       "prompt": "Denken Sie nicht, daß Julie eher ihre Ruhe hätte, wenn Julian gehen würde statt immer wiederzukommen? 1) Ja. 2) Wahrscheinlich hat sie in beiden Fällen irgendwie ihre Ruhe.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                          {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    } ,
                                      {
                                        "item": {
                                            "id": "SM18",
                                            "tags": [ "RUB", "18SM" ],
                                            "string": "Lars hatte nie über die Probleme in seinem Land nachgedacht,| {bis Xenia ihn wachrüttelte.}| Er begriff nicht sofort, was vor sich ging,| seine Sensibilitäten mussten erst entwickelt werden.| Dennoch begann er langsam, anders über die Dinge zu denken.| Und auch wenn er länger gebraucht hatte als manch anderer,| hieß das schließlich nicht, dass es schon zu spät war.",
                       /*                         "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },
                                    
                                     {
                                        "item": {
                                            "id": "SM26",
                                            "tags": [ "RUB", "26SM" ],
                                            "string": "Es schien, als könnte Erna sich alles merken.| Besonders in den Naturwissenschaften hatte sie ein beachtliches Wissen angesammelt.| {Erna war eine wandelnde Bibliothek.}| Wenn es darauf ankam, konnte sie aus dem Gedächtnis immer diejenige Information abrufen,| die im Moment entscheidend war.| Immerhin hatte sie dort sämtliche Einträge von ‚A‘ wie ‚Amalgam‘ bis ‚Z‘ wie ‚Zentrifugalkraft‘ gelagert.",
                       /*                         "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    }//}]}}
                                           ]
                            }
                        },
                              {
                            "group": {        
                                "name": "LC",
                                "order": "fixed",
                                "items": [
                                    
                                    
                                        
    ///remove comment next line for revealing items                          
    {
                                        "item": {
                                            "id": "LC1",
                                            "tags": [ "RUB", "1LC001" ],
                                            "string": "Martha bereute, die streunende Katze nach Hause mitgebracht zu haben,| die sie im Park gefunden hatte.| In den letzten zwei Tagen| hatte diese die Vorhänge des Wohnzimmers| und die vier Beine des Küchentischs zerstört.| {Sie hatte scharfe Krallen.}| Martha befürchtete, es würde nicht gelingen,| eine Katze dieses Alters bei sich aufzunehmen.",
                       /*                         "prompt": "1)Beschreibt die Textpassage, dass Martas Wohnung von einer Katze verwüstet wird? 2) Beschreibt die Textpassage Martas vorschnelles Handeln und ihre Überforderung mit der Katze?",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "gut."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "auch gut."
                        }
                    ]*/
                                        }
                                    },
                                      {
                                        "item": {
                                            "id": "item55",
                                            "tags": [ "RUB", "1LC002" ],
                                            "string": "Martha bereute, die streunende Katze nach Hause mitgebracht zu haben,| die sie im Park gefunden hatte.| In den letzten zwei Tagen| hatte diese die Vorhänge des Wohnzimmers| und die vier Beine des Küchentischs zerstört.| {Sie hatte scharfe Krallen.}| Martha befürchtete, es wäre schon zu spät dafür,| eine Katze in diesem Alter aufzunehmen.",
                       /*                         "prompt": "Sehen Sie hier etwas doppelt?",
                                              "options": [
                                          {
                                               "string": "ja",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "nein",
                                               "feedback": "okay."
                        }
                    ]*/
                                        }
                                    },  
                                  
                                      {
                                        "item": {
                                            "id": "LC2",
                                            "tags": [ "RUB", "2LC" ],
                                            "string": "Johns Traum war es, Formel-1-Fahrer zu werden.| Er war fest entschlossen, hart dafür zu arbeiten| bis zu jenem Tag, an dem er endlich um die Formel-1-Rennstrecke rasen würde,| {bis von der Tribüne stehende Ovationen kamen.}| Aber im Moment ging es nur darum,| hart für seinen Traum zu arbeiten.",
                                        /*        "prompt": "1) Beschreibt die Textpassage Johns Traum vom Formel-1-Rennen und vom Publikumsapplaus 2) Beschreibt die Textpassage, dass John gerne im Rampenlicht steht und alles dafür tut?",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay"
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay"
                        }
                    ]*/
                                        }
                                    }, 
                                     {
                                        "item": {
                                            "id": "LC3",
                                            "tags": [ "RUB", "3LC" ],
                                            "string": "Helen hatte acht Jahre an der medizinischen Fakultät verbracht| und weitere vier Jahre mit der Ausbildung zur Herzchirurgin,| bevor sie ihren ersten Job bekam.| Aber sie hat ihre Entscheidungen nie in Frage gestellt.| Schon als Kind wollte sie Ärztin werden.| Am stärksten fühlte sich Helen immer zu Beginn einer Operation,| {wenn sie ihr Skalpell nahe am Herzen ansetzte,}| das Leben ihres Patienten in ihren Händen.",
                       /*                         "prompt": "1) Beschreibt die Textpassage Helens beruflichen Werdegang und ihre Tätigkeit als Ärztin? 2) Beschreibt die Textpassage, dass Helen als Chirurgin praktiziert und am Herzen operiert?",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        }
                                    }, 
                                      {
                                        "item": {
                                            "id": "LC4",
                                            "tags": [ "RUB", "4LC" ],
                                            "string": "Ginas Job bei der Opernfirma konnte schwierig sein.| Sie war dafür verantwortlich,| sicherzustellen, dass die Aufführungen glatt liefen,| was keine leichte Aufgabe war, wenn die Sänger gerade wieder sehr egoistisch waren.| Wenn die Sache gut gelaufen war, musste Gina lediglich| {die Blumen aufsammeln, die man auf die Bühne geworfen hatte.}| Zu anderen Zeiten verbrachte sie Stunden damit,| aufgebrachte Darsteller zu besänftigen.",
                       /*                         "prompt": "1) Es geht eher darum, die Blumen nach einer Aufführung von einer Bühne aufzusammeln. 2) Es geht eher weniger um eine Aufführung, sondern um Lob und Erfolg in einem anderen Bereich.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        }
                                    },  
 
                                    


                                    
             
                                     

                                    
 {
                                        "item": {
                                            "id": "LC6",
                                            "tags": [ "RUB", "6LC" ],
                                            "string": "Die Tiere in der Auffangstation| kamen von sehr unterschiedlichen Orten.| Einige von ihnen waren Haustiere von BesitzerInnen gewesen,| die gestorben oder weggezogen waren.| Für gewöhnlich waren diese Tiere gutmütig| {und man konnte sie ohne Schutzhandschuhe anfassen.}| Andere Tiere waren missbraucht| oder sogar zum Angriff abgerichtet worden.| Sie erforderten besondere Sicherheitsmaßnahmen.",
                       /*                          "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },       
                                    
                                    {
                                        "item": {
                                            "id": "LC5",
                                            "tags": [ "RUB", "5LC" ],
                                            "string": "Die Führungskräfte des Unternehmens waren sehr besorgt über die Stromversorgung.| Alle Daten im Netzwerk waren auf Servern gespeichert, die ständig laufen mussten.| In den vorangegangenen Wochen| {war es jedoch gelegentlich zu Stromausfällen gekommen.}| Schließlich begann das Unternehmen zu überlegen,| ob in Backup-Generatoren investiert werden sollte.",
                       /*                          "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },     
                                    
                                    /* 
 {
                                        "item": {
                                            "id": "LC16",
                                            "tags": [ "RUB", "16LC" ],
                                            "string": "Martin kochte nicht nur aus Leidenschaft,| sondern war darin etwas obsessiv.| Martin lebt in einer großen Wohngemeinschaft.| Das macht er, damit er relevante Mengen kochen kann.| Er ist Autor von Kochbüchern.| Heute gibt es Gans.| Schon an der geschlossenen Haustür| konnte man den Braten riechen.| Martin erfindet täglich neue Rezepte.| Selten kommt es vor,| dass es jemandem nicht schmeckt.| Daher lädt er auch gerne Gourmets ein,| die spannend über Essen reden können.",
                                                "prompt": "Wie fassen Sie ‚den Braten riechen‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    },             
                                    
                                    
 
                                    
                                    
 
                                    
 {
                                        "item": {
                                            "id": "LC7",
                                            "tags": [ "RUB", "7LC" ],
                                            "string": "Ronja ist in den Bergen aufgewachsen| und an ein naturnahes und körperlich anspruchsvolles Leben gewöhnt.| Abends, nach einem langen Tag,| beschäftigt sie sich auch gerne künstlerisch,| stellt Figuren her.| Zuletzt hat sie einen Luchs gemacht.| Der war aus demselben Holz geschnitzt| wie das Nachtkästchen, dass sie sich gebaut hat.| Ronja hat über die Jahre vielerlei Fertigkeiten erlernt.| Sie sehnt sich jedoch auch nach Neuem.| Ihr großes Ziel ist eine Reise durch die Mongolei.",
                                                "prompt": "Wie fassen Sie ‚aus dem selben Holz geschnitzt‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    },             
                                    
                                    
 
                                  {
                                        "item": {
                                            "id": "LC8",
                                            "tags": [ "RUB", "8LC" ],
                                            "string": "Silas hat andere Interessen als seine Schwester.| Die will nichts lieber| als im Dreck spielen und damit herumspritzen.| Silas hat hingegen andere Freizeitpläne.| Sich die Hände schmutzig zu machen,| das war noch nie was für ihn.| Er schaute lieber die Welt an,| als sie anzufassen und malte sie stattdessen.| Weil Hermine Silas oft mit Dreck ärgert,| hat Silas begonnen,| ein großes Bild seiner Schwester zu malen,| wie sie mit einem Traktor Gülle in ihrem Zimmer versprüht.| Sie liebt es.",
                                                "prompt": "Wie fassen Sie ‚sich die Hände schmutzig machen‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    },           
 
                                 {
                                        "item": {
                                            "id": "LC9",
                                            "tags": [ "RUB", "9LC" ],
                                            "string": "Sören ist gerne mit sich alleine,| dennoch mag er es, wenn es etwas lebendig um ihn herum ist.| Leider gibt in seiner Gegend kaum interessante öffentliche Plätze,| zum Lesen z.B.,| und er fährt nur selten in die Stadt.| Seit kurzem lebt bei Sören jedoch ein kleines Vögelchen.| Es flog ihm zu.| Er muss es noch eine Weile pflegen,| damit es bald wieder fliegen kann.| Sören vermisst jetzt schon| die Zeit mit dem Vögelchen.",
                                                "prompt": "Wie fassen Sie ‚es flog ihm zu‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    },         */   
                                    
                                    {
                                        "item": {
                                            "id": "LC10",
                                            "tags": [ "RUB", "10LC" ],
                                            "string": "Merve ist Astronautin und liebt jeden Moment,| den sie in der Umlaufbahn der Erde verbringen kann.| Gerade schickt sie ihren FreundInnen eine Videobotschaft| und demonstriert ihnen die Schwerelosigkeit.| ‚Wie einfach man sich hier von A nach B bewegen kann!‘| {Sie schwebt durch den Raum.}| Dann macht sie noch ein paar Saltos.| Ihre FreundInnen sind total begeistert.| Ob sie wieder zurück möchte, wird sie gefragt.| ‚Ja‘, sagt sie, ‚aber es wäre auch schön,| wenn die Erde ins All kommen könnte.'",
                                      /*          "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    }, 
                                    
                                    {
                                        "item": {
                                            "id": "LC11",
                                            "tags": [ "RUB", "11LC" ],
                                            "string": "Petra besuchte vor einer Woche ihren alten Freund Miroslav.| Früher waren sie beste Freunde gewesen und hatten sogar zusammen in einer Punk-Band gespielt.| Sie redeten bis spät in die Nacht über alte Zeiten und tranken Sterni.| {Es war ein heftiger Rausch.}| Petra hatte am nächsten Tag starke Kopfschmerzen.| Doch Miroslav hatte die besten Rezepte gegen Kopfschmerzen| und so ging es Petra schnell wieder gut. ",
                       /*                         "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    }, 
                                    
                                    {
                                        "item": {
                                            "id": "LC12",
                                            "tags": [ "RUB", "12LC" ],
                                            "string": "Harry war sich sicher, dass er seinen ersten Fallschirmsprung gut meistern würde.| Es war sein größter Traum, wenn auch zugleich seine größte Angst,| einmal mit dem Fallschirm aus einem Flugzeug zu springen.| {Es war ein turbulenter Fall.}| Harry hatte jedoch den Spaß seines Lebens.| Mächtig durchgeschüttelt kam er wieder heil am Boden an und sprang sofort nochmal.",
                       /*                          "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    }, 
                                    
                                     {
                                        "item": {
                                            "id": "LC13",
                                            "tags": [ "RUB", "13LC" ],
                                            "string": "Peter kaufte sich vor kurzem eine Ukulele.| Es war schon immer sein Wunsch,| noch ein Instrument zu lernen.| Er verbrachte ohne Mühe viel Zeit| und der Klang im Wohnzimmer war sehr gut.| {Es hatte eine gute Resonanz.}| Sogar den Nachbarn gefiel es.| Seither veranstaltet er kleine Konzerte,| was den Zusammenhalt unter den Nachbarn stärkte.| Die Ukulele verhalf Peter zu ganz neuen Ausdrucksmöglichkeiten und Freunden.",
                       /*                         "prompt": "Wie fassen Sie ‚gute Resonanz‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    }, 
                                    
                                    {
                                        "item": {
                                            "id": "LC14",
                                            "tags": [ "RUB", "14LC" ],
                                            "string": "Lea hatte sich angewöhnt,| ihren Bruder nur noch als den Ruin der Familie vorzustellen,| seit dieser immer mehr in die Machenschaften einer Bande Kleinkrimineller geriet.| Er selbst hatte jedoch sehr viel dazugelernt und wusste zB.,| {daß sich versilbertes Gold besser vor dem Finanzamt verstecken ließ.}| Es war ein aufregendes neues Leben ",
                       /*                         "prompt": "Denken Sie, es ist kriminell, Gold vor dem Finanzamt zu verstecken? 1) Ja. 2) Nein.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    },             
                                    

                                    
 
                                    
                                    
 {
                                        "item": {
                                            "id": "LC15",
                                            "tags": [ "RUB", "15LC" ],
                                            "string": "Julie ertrug nur schwer die Unpünktlichkeit ihres doch sehr geliebten Freundes.| Ob sie nun irgendwo zum Essen, zum Tanzen| oder einfach nur im Park für ein Bier verabredet waren| - jedesmal konnte sie sich sicher sein,| von mindestens drei weiteren Kerlen angebaggert worden zu sein,| {bis er denn endlich gekommen war.}| Darauf zumindest konnte sie sich verlassen.",
                       /*                       "prompt": "Sind Sie auch schonmal zuspät zu einer Verabredung gekommen? 1) Ja. 2) Weisz ich nicht. Aber spielt das hier eine Rolle?",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                          {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    } ,
                                    
                                       
                                    
 {
                                        "item": {
                                            "id": "LC18",
                                            "tags": [ "RUB", "18LC" ],
                                            "string": "Lars‘ Morgenroutine hatte immer schon darin bestanden, dass er so lange schlief,| {bis Xenia ihn wachrüttelte.}| Doch jetzt war sie weg und er merkte,| dass er sich von nun an allein darum kümmern musste, rechtzeitig aufzustehen.| Es fiel ihm schwer, seine eigenen Entscheidungen zu treffen,| doch langsam gewöhnte er sich an diese neue Aufgabe.",
                       /*                           "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    } ,
                                    
                                                          
                                    
 {
                                        "item": {
                                            "id": "LC26",
                                            "tags": [ "RUB", "26LC" ],
                                            "string": "Das mobile Schulprojekt ‚Bücher auf Rädern‘| sollte Wissen auch in die entlegensten Dörfer bringen.| Die SchülerInnen vor Ort konnten für vier Wochen ein Buch aus dem Bus ausleihen| und wenn er abfuhr, erhielten die Schulen digitale Kopien.| {Er war eine wandelnde Bibliothek.}| Das Konzept schien gut anzukommen, denn die Bücher waren bei den SchülerInnen sehr begehrt. ",
                       /*                           "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    } //item    }]}}
                                    
                                              
      
                                ]   //items                
                            }    // group LC
                        },     ///group
                        
                          
                        
// hier comments end for testphase
                      
  {
                            "group": {
                                "name": "MM",
                                "order": "fixed",
                                "items": [
                                    
                                    {
                                        "item": {
                                            "id": "MM2",
                                            "tags": [ "RUB", "2MM" ],
                                            "string": "John fuhr das Formel-1-Rennen wie ein geölter Blitz.| Er ritt förmlich auf Lichtwellen durch die Kurven.| Seine Hände waren schon Wackelpudding,| aber er schaffte es dennoch, seinen Gaul richtig zu steuern.| Kurz vor dem Ziel wurde er zur kleinen Maus.| Er wurde von seinen Dämonen eingeholt, die ihm sagten, er hätte keinen Triumph verdient.| {Bis von der Tribüne stehende Ovationen kamen}| und zu Johns Elixier wurden,| ihm die Zweifel nahmen und ins Ziel katapultierten.",
                       /*                          "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },   
                                    
                                    
 {
                                        "item": {
                                            "id": "MM4",
                                            "tags": [ "RUB", "4MM" ],
                                            "string": "Ginas Job als Opernregisseurin war ein Wellenritt.| War sie mit ihren Team im richtigen Drive,| liefen Produktionen wie von selbst.| Selbst aufgebrachte Sänger| konnte sie mit lockeren Moves verzaubern und beruhigen.| So musste sie nach der Aufführung| {nur noch die Blumen aufsammeln, die man auf die Bühne geworfen hatte.}| Zu anderen Zeiten musste sie dafür fast mit dämonischen Endgegnern kämpfen.",
                       /*                         "prompt": "1) Es geht eher darum, die Blumen nach einer Aufführung von einer Bühne aufzusammeln. 2) Es geht eher weniger um eine Aufführung, sondern um Lob und Erfolg in einem anderen Bereich.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        } 
                                    },  
                                    
                                                  
 {
                                        "item": {
                                            "id": "MM5",
                                            "tags": [ "RUB", "5MM" ],
                                            "string": "Louise schwingt  sich gerade für ein Technikprojekt ein.| Sie kann mit ihrem Geist jede Welle reiten und in Gesprächen mit ganzen Bibliotheken um sich werfen.| Wenn sie am Computer sitzt, werden ihre Finger zu kleinen Kabeln| und verschmelzen mit dem Gerät zu einem Gewitter aus Information.| {In letzter Zeit kam es jedoch gelegentlich zu Stromausfällen.}| Fehlt der Saft, tippt sie einfach im Dunkeln auf ihren eigenen Synapsen weiter.| Ihr Gedächtnis ist eine hochauflösende Kamera und verliert nichts.",
                       /*                           "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },  
                                    
                                                                           
 {
                                        "item": {
                                            "id": "MM6",
                                            "tags": [ "RUB", "6MM" ],
                                            "string": "Die SchülerInnen der Klasse 12b waren ein bundgescheckter Flickenteppich.| Fast alle hatten ihre Zotteln bunt getränkt.| Manche hatten sogar ihre Mähne zu bedrohlichen Stacheln geformt und sahen aus wie Seeigel.| Die Dornen waren jedoch ungefährlich und| {man konnte sie ohne Schutzhandschuhe anfassen.}| Die SchülerInnen waren so friedlich wie Gänseblümchen.| Kopfskulpturen nannten sie ihre Werke.| Außenstehende wiederum sprachen gar von offenen Messern, die herumliefen.",
                       /*                           "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },  
                                    
                                                                                      
 {
                                        "item": {
                                            "id": "MM10",
                                            "tags": [ "RUB", "10MM" ],
                                            "string": "Merves Theaterprojekt war ein Schiff ohne Kurs.| In der Organisation war der Wurm drin.| Auch ihre FreundInnen ließen sie am Ende fast in der Wüste stehen.| Sie stand vor einem Berg aus Trümmern, aber sie folgte weiter dem Ruf der Bühne| und rettete ihr Baby: Sie sezierte das Skript,| würzte ein paar Stellen und konnte mit der Bühnentechnik sogar eine bunte Monsterwolke züchten.| {Diese schwebte durch den Raum während des Finales.}| Die Show wurde zum Feuerwerk für die Sinne.",
                       /*                           "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },  
                                    
                                    
                                                                                      
 {
                                        "item": {
                                            "id": "MM11",
                                            "tags": [ "RUB", "11MM" ],
                                            "string": "Petra ist Richterin.| Problemlos kann sie Argumente so tief wie Ozeane formulieren.| Zugleich klingen sie wie feine, scharfe Messer.| Sie behält fast immer die Fassung, nur selten bricht doch ein Damm in ihr.| Heute erst bei einem Angeklagten, der vor der Fahrt sein Auto und sich selbst tankte.| Der Fahrer knutschte schließlich den Asphalt.| {Es war ein heftiger Rausch.}| Das Auto war nur noch eine Flunder und es gab neben dem Fahrer zwei Verletzte.| In solch unverantwortlichen Fällen bricht in Petra ein Feuer aus und ihre Worte werden zu Raketen.",
                       /*                           "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },  
                                    
                                    
                                      
                                                                                      
 {
                                        "item": {
                                            "id": "MM12",
                                            "tags": [ "RUB", "12MM" ],
                                            "string": "Harry war ein Überflieger, wenn es um Tetris ging.| Mit blitzgeölten Bewegungen rattern seine Hände über die Tasten,| ansonsten sah man nur eine steinerne Statue vor dem Spielautomaten.| Seine Gedanken lebten in einer Art Blase| und waren immun gegen das schrille Geschnatter der Zaungäste.| Wie in einem wilden Strudel schraubten sich die Tetris-Steine zu Boden.| {Es war ein turbulenter Fall.}| Harrys Highscore jedoch explodierte immer weiter nach oben.",
                       /*                           "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },  
                                    
                                          
                                                                                      
 {
                                        "item": {
                                            "id": "MM18",
                                            "tags": [ "RUB", "18MM" ],
                                            "string": "Für Lars war das Aufstehen eine Zwangsarbeit.| Jeden Morgen weigerte er sich so lange, das Steuer seines Lebens zu übernehmen,| {bis Xenia ihn wachrüttelte.}| Bis ins hohe Alter wuchs er aus seinen Kinderschuhen nie ganz heraus.| Aber zu seinem Glück setzte Xenia ihm auch nie die Pistole auf die Brust.",
                       /*                           "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },  
                                    
                                                                                             
 {
                                        "item": {
                                            "id": "MM26",
                                            "tags": [ "RUB", "26MM" ],
                                            "string": "Das mobile Schulprojekt ‚Bücher auf Rädern‘ goss Wissen wie durch Trichter in die SchülerInnen ein.| Das Vorzeigekonzept war der glänzende Stern| am Himmel des sozialen Engagements.| Die SchülerInnen verschlangen nun die Bücher, die ihnen per Bus serviert wurden.| {Er war eine wandelnde Bibliothek.}| Noch lange sprachen alle davon, denn teilweise waren die Bücher die besseren LehrerInnen. ",
                       /*                           "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        } 
                                    },  
                                    
                                    
 
                                    /* filler
                                    {
                                        "item": {
                                            "id": "MM16",
                                            "tags": [ "RUB", "16MM" ],
                                            "string": "Martin war Gourmet.| Er ließ nichts anbrennen, wenn es um gutes Essen ging.| Auch vermeintliches 08/15 Essen| trifft bei seinen Sinnen ins Schwarze.| In Falafel z.B. könnte er baden.| Heute verputzte er schon 2x Falscher Hase vom Grill.| Er ist mit der Nase über den Laden gestolpert.| Er konnte schon von weitem den Braten riechen.| Das passiert ihm öfter,| wenn er durch die Stadt tigert| und seinen Rüssel ausstreckt.",
                                                "prompt": "Wie fassen Sie ‚den Braten riechen‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    },             
                                    
     
                                    
                                    
  {
                                        "item": {
                                            "id": "MM7",
                                            "tags": [ "RUB", "7MM" ],
                                            "string": "Ronja hatte schon vor Jahren das Junglefieber gepackt.| Wie nach einer Gehirnwäsche kam sie auf den Trichter,| bei einer Jungleexpedition aufzusatteln.| Ihre Eltern klopften auf Holz,| als Ronja das Nest verließ.| Als Talisman gaben sie ihr einen Wanderstab mit.| Er war aus demselben Holz geschnitzt| wie die Eingangstür ihres Hauses.| Ronja konnte sich auf die Aufregung ihrer Eltern keinen Reim machen.| Der Jungle ist kein Ponyhof, das war ihr klar.| Aber dass die Natur sie verschlucken würde, glaubte sie nicht.",
                                                "prompt": "Wie fassen Sie ‚aus dem selben Holz geschnitzt‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    },             

                                    
    
                                    
                                    
 {
                                        "item": {
                                            "id": "MM8",
                                            "tags": [ "RUB", "8MM" ],
                                            "string": "Silas versumpfte in letzter Zeit häufiger| in den schrägsten Ecken der Stadt.| Seine alte Stelle war ihm flötengegegangen.| Silas war sofort eine neue zugeflogen,| jedoch fehlte ihm gerade der Funken,| um wieder richtig Gas geben zu können.| Bevor er Makler wurde,| hüpfte Silas auf dem Bau herum,| bis er sich den Rücken zerschossen hatte.| Zumindest muss er sich jetzt| die Hände nicht mehr schmutzig machen,| sagt er immer. Silas gefällt es viel mehr,| butterweiche Hände zu haben, anstatt Reibeisen.",
                                                "prompt": "Wie fassen Sie ‚sich die Hände schmutzig machen‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    },             
                                    
                                    
     
                                    
                                    
 
 
                                     
                                    
 {
                                        "item": {
                                            "id": "MM9",
                                            "tags": [ "RUB", "9MM" ],
                                            "string": "Sören liebt es im Chaos zu baden.| Entsprechend sah es bei ihm auch aus| wie bei Hempels unterm Sofa.| Er sah sich jedoch eher| als Kurator eines Stilllebens.| Zumindest bis das bunte Rabenküken| auf seiner Fensterbank aufschlug und durch seine Galerie bretterte.| Sören musste seine künstlerischen Ausgeburten schließlich begraben| und der Rabe unterschrieb einen Mietvertrag.| Sören erkannte den Wink des Schicksals| und sieht den Raben jetzt als Sprungbrett in die Raben-Performancekunst.",
                                                "prompt": "Wie fassen Sie ‚es flog ihm zu‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    }, 
                                    
                                    
 

 
                                    
 {
                                        "item": {
                                            "id": "MM10",
                                            "tags": [ "RUB", "10MM" ],
                                            "string": "Merve driftet häufig in komplett andere Sphären ab.| Dann scannt sie mit Laserblicken| die Umgebung nach magischen Ereignissen| und klebt förmlich an den Dingen.| Als Faultier und Elephant im Porzellanladen| lebt sie die meiste Zeit im Reich zwischen den Extremen,| außer bei Spezialmissionen.| Jedoch ist ihr dabei letztens eine Flasche mit lila Rauch| für ihren Djinn-Trick flöten gegangen, inklusive Monsterwolke.| Sie schwebte durch den Raum.| Eine Legende, die sich Abenteurer noch heute erzählen.",
                                                "prompt": "Wie fassen Sie ‚sie schwebt durch den Raum‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    }, 
                                    
 
 
 
                                    
 {
                                        "item": {
                                            "id": "MM11",
                                            "tags": [ "RUB", "11MM" ],
                                            "string": "Petra war Richterin und konnte Argumente, scharf wie Messer, formulieren.| Zuletzt verknackte sie jemanden,| der nicht nur sein Auto tankte,| sondern sich vor dem Fahren auch gerne selber ordentlich die rostige Gurgel ölte.| Beim letzten Mal knutschte er dann den Asphalt.| Es war ein Rausch sondergleichen.| Solche Fälle stehlen Petra die Worte| und sie verdammt den Angeklagten vor der Urteilsverkündung| mit höllischem Schweigen.",
                                                "prompt": "Wie fassen Sie ‚es war ein Rausch sondergleichen‘ auf?",
                                              "options": [
                                          {
                                               "string": "wörtlich",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "figürlich",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    }, 
                                    
 
                                    
 
 
                                    
 {
                                        "item": {
                                            "id": "MM12",
                                            "tags": [ "RUB", "12MM" ],
                                            "string": "Harry war ein Überflieger,| wenn es um Tetris ging.| Mit blitzgeölten Bewegungen ratterte er über die Tasten,| doch sonst sah man nur eine steinerne Statue vor dem Spielautomaten.| Seine Gedanken lebten in einer Art Blase| und waren immun gegen das schrille Geschnatter der zuschauenden Zaungäste.| Wie in einem Tornado gefangen| zwirbelte Harry die Tetris-Steine in die richtige Position,| bevor sie weiter fielen und aufschlugen.| Es war ein turbulenter Fall.| Harrys Highscore jedoch explodierte immer weiter nach oben.",
                                                "prompt": "1) Es geht darum, dass etwas hinabfällt. 2) Es geht um etwas wie den Verlust von Erfolg. ",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    }, 
 
                                    

 

                                    
 {
                                        "item": {
                                            "id": "MM13",
                                            "tags": [ "RUB", "13MM" ],
                                            "string": "Peters Musik war ein Jungbrunnen für die Sinne.| Jeden Sonntag tigerte er durch die Stadt| und verzauberte sie mit seinen Beschwörungen.| Sein Instrument hatte er aus verschiedensten Trümmern zusammengegossen.| Es hatte eine gute Resonanz.| Äußerlich war es ein Monster.| Innerlich ein verspieltes Kätzchen.| Peter war ein Stern am Himmel dieser Stadt.| Er brachte Herzen zum Glühen und Berge zum Weinen.",
                                                "prompt": "1) Es geht um akutische bzw. klangliche Eigenschaften. 2) Es geht um die Wirkung die beim Hörer ausgelöst wird.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    }   ///}]}}
        
                                     
                                    
 {
                                        "item": {
                                            "id": "MM17",
                                            "tags": [ "RUB", "17MM" ],
                                            "string": "Wir waren die Schüler des Films, der uns etwas über Phantastik beibrachte.| Identitäten von Tieren und Charakteren waren rostige Schrauben, die der Regisseur ständig austauschte.| Zum Beispiel fand sich Dr. Dings – eben noch in seiner New Yorker Kanzlei sitzend – plötzlich mitten im Meer wieder:| Der Anwalt war ein Hai. ",
                                                "prompt": "Warum taucht in der Geschichte ein Hai auf? 1) Es geht um die brutale Rhetorik des Rechtsvertreters. 2) Es geht um die Verwandlung eines Menschen in ein Tier.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    }  , 
                        
                                            
                                    
 {
                                        "item": {
                                            "id": "MM18",
                                            "tags": [ "RUB", "18MM" ],
                                            "string": "Für Lars war das Aufstehen eine Zwangsarbeit.| Jeden Morgen weigerte er sich so lange, das Steuer seines Lebens zu übernehmen,| bis Ksenia ihn wachrüttelte.| Bis ins hohe Alter wuchs er aus seinen Kinderschuhen nie ganz heraus. ",
                                                "prompt": "Wie verstehen Sie die markierte Passage? 1) Es geht um das morgendliche Aufwachen aus seinem Schlaf. 2) Es geht um ein spirituelles, politisches, o.ä. Erwachen.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    }   ,
                                    
                                                          
 {
                                        "item": {
                                            "id": "MM19",
                                            "tags": [ "RUB", "19MM" ],
                                            "string": "Wenn Hegel philosophierte, entriss er der Philosophie jeden Boden.| Manche sagen, er knipste ihr das Licht an, andere meinen, er versenkte sie im Meer.| Eines Tages war er bei seiner morgendlichen Kopfstandübung in dieser Position eingeschlafen!| Zum Glück wurde Hegel endlich durch Marx| vom Kopf auf die Füße gestellt.",
                                                "prompt": "Warum stellt Marx Hegel auf die Füße? 1) Er befreit Hegel aus einer schief gelaufenen gymnastischen Übung. 2) Es geht um Marx‘ Auseinandersetzung mit Hegels Philosophie.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    } 
                                    
                            /*                
                                                          
 {
                                        "item": {
                                            "id": "MM20",
                                            "tags": [ "RUB", "20MM" ],
                                            "string": "Eigentlich wollten wir die Nachteule im Regal längst durch einen neuen Staubfänger ersetzt haben,| weil sie uns nachts in unseren Träumen heimsuchte.| Weil Putzfee Erna jedoch besessen davon war,| entschieden wir uns dazu, dem ausgestopften Vogel| nur ein Auge zuzudrücken,| was bei Erna Luftsprünge auslöste.| Sie war froh, wenigstens ein wachsames Auge in der Wohnung zu wissen.",
                                                "prompt": "Warum wurden dem Vogel die Augen nicht einfach entfernt? 1) Weil Erna das nicht hätte durchgehen lassen. 2) Weil es besser ist, wenn einer nachts auf uns aufpasst.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    }   */
                        
                        
 
                                    
      
                                ]
                            }
                        } ,
                        
                        
// hier comments end for testphase
                      
  {
                            "group": {
                                "name": "filleritems",
                                "order": "random",
                                "items": [
                                    {
                                        "item": {
                                            "id": "filler01",
                                            "string": "Ronja war in etwa so beweglich wie ein Baum.| Der Apfel fällt nicht weit vom Stamm| und Ronjas Schwester war aus demselben Holz geschnitzt| wie Ronja und ihr Vater.| Nur ihre Mutter war eher ein Springkraut:| flexibel, beweglich, kann in kürzester Zeit ganze Flächen besiedeln.| Ronja musste trotzdem am Sportunterricht teilnehmen.| Und obwohl sie wie ein Felsen dastand,| hatte sie mehr Spaß am Sport als alle anderen zusammen.",
                                     /*             "prompt": "Ergibt das Sinn?",
                                              "options": [
                                          {
                                               "string": "ja",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "nein",
                                               "feedback": "okay."
                        }
                    ]*/
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "fillerem01",
                                            "string": "Nach Martas Meinung war Depression eine Kröte,| die schmierig auf deinem Kopf hocken konnte,| bis sie endlich doch noch herunterrutschte.| Die Traurigkeit aber, in  der sie die letzten zehn Tage verbracht hatte,| war eine andere.| Hektisch und aggressiv.| {Mit scharfen Krallen.}| Sie hatte nicht auf Marta gesessen,| sondern sie richtig überfallen.",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "fillerlc03",
                                            "string": "Helen hatte acht Jahre an der medizinischen Fakultät verbracht| und weitere vier Jahre mit der Ausbildung zur Herzchirurgin,| bevor sie ihren ersten Job bekam.| Trotz dieser langen Zeit hat sie ihre Entscheidungen nie in Frage gestellt.| Schon als Kind wollte sie Ärztin werden.| Am stärksten fühlte Helen sich immer zu Beginn einer Operation,| {wenn sie ihr Skalpell nahe am Herzen ansetzte,}| das Leben ihrer PatientInnen in ihren Händen.",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                         {
                                        "item": {
                                            "id": "fillerem04",
                                            "string": "Wenn Ginas Büroangestellte kooperativ waren,| konnten sie großartige Dinge zusammen erreichen.| Sie waren ein Chor in perfekter Harmonie;| die zarten Töne des Soprans| fügten sich perfekt ein in das mächtige Donnern der Bässe.| Nach der Performance musste Gina lediglich| {die Blumensträuße aufheben, die man auf die Bühne geworfen hatte.}| Wenn sie jedoch unkooperativ waren,| war die sich ergebende Kakophonie ein Angriff auf die Sinne.",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                        {
                                        "item": {
                                            "id": "fillerlc07",
                                            "string": "Ronja ist in den Bergen aufgewachsen| und an ein naturnahes und körperlich anspruchsvolles Leben gewöhnt.| Abends, nach einem langen Tag,| beschäftigt sie sich auch gerne künstlerisch,| stellt Figuren her.| Zuletzt hat sie einen Luchs gemacht.| {Der ist aus demselben Holz geschnitzt}| wie das Nachtkästchen, dass sie sich gebaut hat.| Ronja hat über die Jahre vielerlei Fertigkeiten erlernt.| Sie sehnt sich jedoch auch nach Neuem.| Ihr großes Ziel ist eine Reise durch die Mongolei.",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "fillersm08",
                                            "string": "Silas ist Kriminologe und interessiert sich schon seit seiner Kindheit für Kriminalfälle.| Da Silas parallel ein Interesse in Naturwissenschaften entwickelte, war Kriminologie das Beste, was er studieren konnte.| Er hatte schon immer wissen wollen, wie es dazu kommt, dass sich Menschen| {die Hände schmutzig machen.}| Die Motive, die inneren Konflikte, und natürlich mit welcher Technik die Täter gefasst werden.| Am meisten fasziniert ihn noch immer die DNA,| und wie so etwas Kleines so deutliche Spuren hinterlässt.",
                       /* 
                        
                                                  "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "fillerem09",
                                            "string": "Sören hatte viel Glück im Leben.| Sein Reichtum war regelrecht vom Himmel gefallen und wenn er Probleme hatte, wurden sie ohne großen Wirbel einfach weggeweht.| Alles fiel ihm in den Schoß.| Und all das, ohne dass er dem Glück je entgegenfliegen musste.| Sören lebte mit den Winden, sagen einige,| manche nannten ihn einen Luftikus.| Doch verflogen hatte er sich im Leben nie.",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                    
                                     {
                                        "item": {
                                            "id": "fillerlc13",
                                            "string": "Peter kaufte sich vor kurzem eine Ukulele.| Es war schon immer sein Wunsch gewesen, noch ein Instrument zu lernen.| Sogar den Nachbarn gefiel die Idee.| Er verbrachte ohne Mühe viel Zeit beim Spielen| und der Klang im Wohnzimmer war sehr gut.| {Dieses hatte eine tolle Resonanz.}| Seither veranstaltet er kleine Konzerte,| was den Zusammenhalt unter den Nachbarn stärkt.| Die Ukulele hat Peter zu ganz neuen Ausdrucksmöglichkeiten und FreundInnen verholfen.",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                     {
                                        "item": {
                                            "id": "fillerem14",
                                            "string": "Lea hatte sich angewöhnt,| ihren Bruder Matti nur noch als das Grab der Familie vorzustellen,| seit dieser immer mehr in den dunklen Machenschaften einer Bande Kleinkrimineller aufging.| Er empfand sein neues Leben hingegen durchaus als Bereicherung| und hatte keine Ahnung,| warum sie ihm vorwarf,| {er würde das Gold der Familie versilbern.}| Er dachte immer, mit ihr auf einer Wellenlänge gewesen zu sein.",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "fillerlc16",
                                            "string": "Martin ist Autor von Kochbüchern.| Er kocht nicht nur aus Leidenschaft,| sondern ist darin sogar etwas obsessiv.| Daher lebt er in einer großen Wohngemeinschaft,| damit er große Mengen für viele Menschen kochen kann.| Heute gibt es Gans.| Schon an der geschlossenen Haustür kann man| {den Braten riechen.}| Martin erfindet täglich neue Rezepte und es kommt selten vor,| dass es jemanden nicht schmeckt.| Daher lädt er auch gerne Gourmets ein,| die spannend über Essen reden können.",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "fillerem17",
                                            "string": "Esra wollte ihren ehemaligen Arbeitgeber vor Gericht in Frikassee verwandeln.| Doch sie wusste nicht, dass die Firma sich von einem der gefährlichsten Raubtiere im Meer vertreten ließ.| Keines seiner Opfer war je von ihm verschont worden.| {Der Anwalt war ein Hai.}| Wen er zwischen die Zähne bekam, der konnte damit rechnen, im Gerichtssaal zerfetzt zu werden.",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "fillerem19",
                                            "string": "Hegels Vorstellung vom dialektischen Idealismus war eine Kopfgeburt gewesen.| Generationen von nachfolgenden PhilosophInnen bekamen Kopfschmerzen von einem derart schwindelerregenden Konstrukt.| Zum Glück wurde Hegel endlich durch Marx| {vom Kopf auf die Füße gestellt.}",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                       {
                                        "item": {
                                            "id": "fillerem20",
                                            "string": "Eigentlich sollten die Figuren im Regal dafür sorgen,| dass Erna stets alle Hände voll zu tun hatte, wenn sie staubwedelnd durch die Wohnung fegte.| Die Putzfee hatte jedoch ein Geistesblitz ereilt,| als sie einmal zufällig lange genug vor einem der Staubfänger verweilt war.| Man musste bei manchem Reinigungsakt einfach| {ein Auge zudrücken,}| dann säuberten sich die Regale wie von selbst.| Ihre Kinder waren ohnehin blind für den Schmutz.",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                     {
                                        "item": {
                                            "id": "fillerlc21",
                                            "string": "Inge liebte es, |an den Wochenenden die Flohmärkte nach second hand Kleidung zu durchstöbern| und auf Schnäppchenjagd zu gehen.| Von der Verkäuferin| {wurde ihr der Spiegel vorgehalten,}| während sie geschickt mit ihr um den Preis feilschte. ",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "fillerem22",
                                            "string": "Anna und Luisa waren ein Herz und eine Seele.| Lange Zeit steuerten sie gemeinsam durch dick und dünn,| bis sie eines Tages vom Kurs abkamen |und ihre Freundschaft | {den Bach runter ging.}",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                         {
                                        "item": {
                                            "id": "fillerlc23",
                                            "string": "Endlich war es da -| das lang ersehnte Wochenende im Vergnügungspark.| Tom und seine FreundInnen reihten sich wieder und wieder in die Schlangen der Wartenden. | Sie ließen keines der Fahrgeschäfte aus. | Ihr Highlight war ein Ritt auf der Achterbahn.",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                       {
                                        "item": {
                                            "id": "fillersm25",
                                            "string": "Die Gefühle seiner Mitmenschen berührten Simon nicht.| Wenn jemand um ihn herum zu emotional war,| {wurde er zum Stein.}| Er war kein guter Zuhörer,| der durch seine bloße Anwesenheit Trost und Wärme gespendet hätte.| Vielmehr blieb er regungslos und ließ sein Gegenüber mit dessen Problemen allein. ",
                       /*                            "prompt": "Haben Sie den Text aufmerksam gelesen?",
                                              "options": [
                                          {
                                               "string": "Ja",
                                               "feedback": "Gut."
                        },
                        {
                                               "string": "Nein",
                                               "feedback": "Das sollten Sie aber bitte!"
                        }
                    ]*/
                                        }
                                    },
                                    
                                    
                                    
                                     {
                                        "item": {
                                            "id": "filler02",
                                            "string": "Silas war Börsenmakler in einem eher kriminellen Unternehmen.| Er war jemand speziell für die dreckigsten Tricks beim Kundenfang und Spekulieren.| Er konnte aus Müll Geld machen.| Es war für ihn kein Problem, sich die Hände schmutzig zu machen.| Er liebte das Schmutzige.| Erst die Finanzkrise setzte dem sudeligen Sumpf einer Firma ein Ende: Erst ging Silas Firma pleite, dann schließlich Silas.| Mittlerweile berät er die Börsenaufsicht und teilt seine schmutzigen Geheimnisse.",
                       /*                           "prompt": "1) Es geht eher darum, Dreck auf die Hände zu bekommen. 2) Es geht eher darum, unangenehme oder kriminelle Arbeit zu verrichten.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        }
                                    },
                                    
                                    
                                    
                                     {
                                        "item": {
                                            "id": "filler03",
                                            "string": "Sörens hatte viel Glück im Leben.| Sein Reichtum viel regelrecht vom Himmel und falls er Probleme hat, werden sie ohne großen Wirbel einfach weggeweht.| Alles fliegt ihm zu.| Und all das, ohne dass er dem Glück je entgegenfliegen musste.| Sören lebte mit den Winden sagen einige, manche nannten ihn Luftikus.| Verflogen hat er sich im Leben bisher noch nie.  ",
                       /*                           "prompt": "1) Es geht darum, dass alles in Sörens Richtung geflogen kommt. 2) Es geht eher darum, dass Sören etwas ohne Mühe zukommt und gelingt. ",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]*/
                                        }
                                    },
                                    
                                       {
                                        "item": {
                                            "id": "filler04",
                                            "string": "Merve ist seit einigen Wochen verliebt und nur noch auf fernen Planeten anzutreffen.| Es geschah ohne Countdown ziemlich schnell vor zwei Wochen.| Sie sagte es dauerte etwa 3 Sekunden und sie hatte sofort die Umlaufbahn verlassen.| Sie schwebte durch den Raum.| Seither ist um sie herum alles wie voller Sternenstaub und Glitzer.| Dennoch hat Merve ein wenig Angst, was sie von Zeit zu Zeit doch dazu zwingt, auf Planeten zu landen, um sich ein wenig zu erden.",
                                                 "prompt": "1) Es geht eher um das Erleben von Gefühlen. 2) Es geht eher darum, dass sich jemand schwebend durch den Raum bewegt. ",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                        {
                                        "item": {
                                            "id": "filler05",
                                            "string": "Petra verlor sich gerne in Träumen und Ideen.| Sie liebte die Trunkenheit während sie sich z.B. Geschichten ausdachte.| Dabei schunkelt sie so lange zwischen den möglichen Wendungen und Visionen, bis sie ein Ende findet.| Sie betrank sich richtig mit Geschichten und war danach wie verkatert.| Es waren heftige Räusche.| Sie war süchtig danach und schaffte es, trotz all der Torkelei auf dem Weg dorthin, Schriftstellerin zu werden.",
                                                 "prompt": "1) Es geht eher um die Wirkung von Alkohol. 2) Es geht eher um die Qualität eines Erlebnisses.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                        {
                                        "item": {
                                            "id": "filler06",
                                            "string": "Nach 10 Jahren im gleichen Beruf wagte Harry den Sprung in die Freiheit und breitete seine Flügel aus.| Endlich konnte er die Welt von oben sehen, in die Weite blicken und sich losreißen von seinem dunklen Tal aus Akten.| Doch Harry flog so weit in die Höhe, dass er die Kraft verlor.| Es war ein turbulenter Fall.| Harry ging pleite und musste wieder von neuem das Fliegen lernen.| Dennoch blieb er optimistisch und bereute seinen Sprung nicht. ",
                                                 "prompt": "1) Es geht um einen Fall im Raum, bzw. vom Himmel. 2) Es geht um etwas wie den Verlust von Erfolg.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                         {
                                        "item": {
                                            "id": "filler07",
                                            "string": "Peters Reiseberichte waren für die Zuhörer wie ein Gewitter aus Klang.| Mit jeder Wendung in den Erzählungen wurde sie in neue Symphonien gerissen.| Sein Erscheinungsbild war regelrecht explosiv und passte zu der Musik seiner Geschichten.| Es hatte eine gute Resonanz.| Verband sich gut und ergab zusammen eine ganze Oper, der man als Zuschauer beiwohnen konnten.| Man bekam das Gefühl der Korpus seiner Geschichten zu sein.",
                                                 "prompt": "1) Es geht um die Wirkung von Peters Erscheinungsbild. 2) Es geht darum, dass etwas gute akustische Eigenschaften hat.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "filler08",
                                            "string": "Silas ist Kriminologe und interessierte sich schon seit seiner Kindheit für Kriminalfälle.| Da Silas parallel ein Interesse in Naturwissenschaften entwickelt hat, war Kriminologie das Beste was er studieren konnte.| Er wollte schon immer wissen, wie es dazu kommt, dass sich Menschen die Hände schmutzig machen.| Das Motiv, die inneren Konflikte, und natürlich mit welcher Technik Täter gefasst werden.| Am meisten fasziniert ihn die DNA, und wie so etwas kleines so deutliche Spuren hinterlässt.",
                                                 "prompt": "1) Es geht eher darum, Dreck auf die Hände zu bekommen. 2) Es geht eher darum, unangenehme oder kriminelle Arbeit zu verrichten. ",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                       {
                                        "item": {
                                            "id": "filler09",
                                            "string": "Sören war eigen, aber in vielem sehr begabt.| Es war so, dass egal wie komplex die Aufgabe war und wie lange sie dauerte, Sören die Ruhe und die passenden Ideen dafür fand.| Es flog ihm zu.| Mit anderen Sachen hatte Sören wiederum Schwierigkeiten.| Seine Leidenschaften kann er nicht immer gut teilen.| Dennoch fand Sören immer wieder Gesellschaft, zB. über das Schachspielen. ",
                                                 "prompt": "1) Es geht darum, dass etwas zu Sören geflogen gekommen ist. 2) Es geht eher darum, dass Sören viel Glück hat oder ihm etwas ohne Mühe zukommt und gelingt. ",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "filler10",
                                            "string": "Merve träumt davon Kostümdesignerin zu werden.| Sie konzipiert gerne Kleider für Menschen.| Sie liebt die Unterschiede der Menschen.| Es ergeben sich dadurch viel Design-Möglichkeiten.| Derzeit schneidert sie am liebsten Kleider für die Sängerin und langjährige Freundin Anna.| Sie hat ein sehr besonderes Auftreten, sagt Merve, und schwebe durch den Raum.| Merve gefallen solche Momente und genießt daher ihren Beruf sehr, auch wenn es nicht immer leicht ist in dem Bereich.",
                                                 "prompt": "1) Es geht eher um das Auftreten und Erscheinen einer Person. 2) Es geht eher darum, dass sich jemand schwebend durch den Raum bewegt.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                        {
                                        "item": {
                                            "id": "filler11",
                                            "string": "Petra besuchte letzte Woche ihr Lieblingsmuseum, in dem sie schon lange nicht mehr gewesen war.| Sie verbrachte Stunden damit sich die Bilder, Kunstwerke, Ausstellungstücke und Info-Texte durchzulesen und alles in Erfahrung zu bringen, was sie konnte.| Es war ein heftiger Rausch.| Petra vergaß schnell die Zeit und wurde fast im Museum eingeschlossen, doch der Hausmeister bemerkte sie zum Glück noch rechtzeitig.",
                                                 "prompt": "1) Es geht eher um die Wirkung von Substanzen. 2) Es geht eher um die Qualität eines Erlebnisses.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                         {
                                        "item": {
                                            "id": "filler12",
                                            "string": "Harry machte vor Jahren viel Geld mit Gewinnspielen und hatte ein sorgenfreies Leben: Alles lief super.| Doch dann machte Harry schwere Verluste.| Sehr schnell bekam Harry finanzielle Probleme, der Stress wurde zu viel und er konnte nicht mehr.| Es war ein turbulenter Fall.| Harry hatte sich übernommen und verlor alles.| Harry fand jedoch auch danach wieder einen Weg und sucht heutzutage den Spaß am Risiko vielleicht höchstens noch in Videospielen.",
                                                 "prompt": "1) Es geht um einen Fall im Raum. 2) Es geht um etwas wie den Verlust von Erfolg und Besitz.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                       {
                                        "item": {
                                            "id": "filler13",
                                            "string": "Peter beschäftigt sich viel mit bildender Kunst.| Er sucht gerne nach ganz besonderen Details in den Techniken der Künstler und stellt sich vor, wie es ist, ein großes Kunstwerk zu malen.| Besondere Kunst findet Peter aber auch an ganz unscheinbaren Orten.| Gestern ging Peter durch die Straße und begegnete einem tollen Werk.| Es hatte eine gute Resonanz.| Peter mochte solche Ereignisse im Alltag.| Kunst ist überall.",
                                                 "prompt": "1) Es geht um die Wirkung, die das Kunstwerk in Peter erzeugt. 2) Es geht um die akustischen Eigenschaften des Kunstwerks. ",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                        {
                                        "item": {
                                            "id": "filler14",
                                            "string": "Silas hat andere Interessen als seine Schwester.| Die will nichts lieber als im Dreck spielen und damit herumspritzen.| Silas hat hingegen andere Freizeitpläne.| Sich die Hände schmutzig machen, das war noch nie was für Silas.| Silas schaute lieber die Welt an, als sie anzufassen, und malte sie gerne.| Weil Hermine Silas oft mit Dreck ärgert, hat sich Silas daher entschieden ein großes Bild seiner Schwester zu malen, wie sie mit einem Traktor Gülle in ihrem Zimmer versprüht.| Sie liebt das Bild.",
                                                 "prompt": "1) Es geht eher darum, Dreck auf die Hände zu bekommen. 2) Es geht eher darum, unangenehme oder kriminelle Arbeit zu verrichten. ",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                        {
                                        "item": {
                                            "id": "filler15",
                                            "string": "Sören ist gerne mit sich alleine, dennoch mag er es, wenn es etwas lebendig um ihn herum ist.| Leider gibt es in seiner Gegend kaum interessante öffentliche Plätze, z.B. zum Lesen, und er fährt nur selten in die Stadt.| Seit kurzem lebt bei Sören jedoch ein kleines Vögelchen.| Es flog ihm zu.| Er muss es noch eine Weile pflegen, damit es bald wieder fliegen kann.| Sören vermisst jetzt schon die Zeit mit dem Vögelchen.",
                                                 "prompt": "1) Es geht darum, dass etwas zu Sören geflogen gekommen ist. 2) Es geht eher darum, dass jemand viel Glück hat oder ihm etwas ohne Mühe zukommt. ",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "filler16",
                                            "string": "Merve ist Astronautin und liebt jeden Moment, den sie in der Umlaufbahn der Erde verbringen kann.| Gerade schickt sie ihren Freunden eine Videobotschaft und demonstriert ihren Freunden, die Schwerelosigkeit.| ‚Wie einfach man sich hier von A nach B bewegen kann!‘ Sie schwebt durch den Raum.| Dann macht sie noch ein paar Saltos.| Ihre Freunde sind total begeistert.| Ob sie wieder zurück möchte, wird sie gefragt. ‚Ja sagt sie, aber es wäre auch schön, wenn die Erde ins All kommen könnte.‘",
                                                 "prompt": "1) Es geht eher um das Auftreten und Erscheinen einer Person. 2) Es geht eher darum, dass sich jemand schwebend durch den Raum bewegt. ",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                         {
                                        "item": {
                                            "id": "filler17",
                                            "string": "Petra besuchte vor einer Woche ihren alten Freund Miroslav.| Früher waren sie beste Freunde und hatten zusammen sogar eine Punk-Band.| Sie redeten bis spät in die Nacht über alte Zeiten und tranken Sterni.| Es war ein heftiger Rausch.| Petra hatte am nächsten Tag starke Kopfschmerzen.| Miroslav hat jedoch die besten Rezepte gegen Kopfschmerzen und so ging es Petra schnell wieder gut. ",
                                                 "prompt": "1) Es geht eher um die Wirkung von Alkohol. 2) Es geht eher um die Qualität eines Erlebnisses.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "filler18",
                                            "string": "Harry war sich sicher, dass er seinen ersten Fallschirmsprung gut meistern würde.| Es war sein größter Traum, wenn auch zugleich seine größte Angst, einmal mit dem Fallschirm aus einem Flugzeug zu springen.| Es war ein turbulenter Fall.| Harry hatte jedoch den Spaß seines Lebens.| Mächtig durchgeschüttelt kam er wieder heil am Boden an und sprang sofort nochmal. ",
                                                 "prompt": "1) Es geht um einen Fall im Raum. 2) Es geht um etwas wie bspw. einen Karriereabsturz.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "filler19",
                                            "string": "Peter kaufte sich vor kurzem eine Ukulele.| Es war schon immer sein Wunsch, noch ein Instrument zu lernen.| Sogar den Nachbarn gefiel die Idee.| Er verbrachte ohne Mühe viel Zeit und der Klang im Wohnzimmer war sehr gut.| Es hatte eine gute Resonanz.| Seither veranstaltet er kleine Konzerte, was den Zusammenhalt unter den Nachbarn stärkte.| Die Ukulele verhalf Peter zu ganz neuen Ausdrucksmöglichkeiten und Freunden.",
                                                 "prompt": "1) Es geht um die Raumakustik des Wohnzimmers. 2) Es geht um die Rezension von Peters Musik in einer Zeitung",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                       {
                                        "item": {
                                            "id": "filler20",
                                            "string": "Silas versumpfte in letzter Zeit häufiger in den schrägsten Ecken der Stadt.| Seine Stelle ging ihm flöten.| Silas ist sofort eine neue zugeflogen, jedoch fehlt ihm gerade der Funken, um wieder richtig Gas geben zu können.| Bevor er Makler wurde, hüpfte Silas auf dem Bau herum, bis er sich den Rücken zerschossen hat.| Zumindest muss er sich die Hände nicht mehr schmutzig machen, sagt er immer.| Silas gefällt ist viel mehr, butterweiche Hände zu haben, anstatt Reibeisen. ",
                                                 "prompt": "1) Es geht eher darum, Dreck auf die Hände zu bekommen. 2) Es geht eher darum, unangenehme oder kriminelle Arbeit zu verrichten. ",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "filler26",
                                            "string": "Sören liebt es im Chaos zu baden.| Seine Wohnung glich einem Testgelände für Bomben.| Er selbst sah sich eher als Kurator eines Stilllebens.| Zumindest bis das wackelige Rabenküken auf seiner Fensterbank aufschlug und durch seine Galerie bretterte.| Es flog ihm zu.| Nach zwei Tagen konnte Sörens neuer Kollege wieder auf Spur gebracht werden.| Seither besucht der Rabe Sören häufiger, um gemeinsam mit ihm im Chaos zu baden. ",
                                                 "prompt": "1) Es geht darum, dass etwas zu Sören geflogen gekommen ist. 2) Es geht eher darum, dass jemand viel Glück hat oder ihm etwas ohne Mühe zukommt. ",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                       {
                                        "item": {
                                            "id": "filler21",
                                            "string": "Merves Theaterprojekt war ein Schiff ohne Kurs.| In der Organisation war der Wurm drin.| Auch ihre Freunde ließen sie am Ende fast in der Wüste stehen.| Sie stand vor einem Berg aus Trümmern, aber sie folgte weiter dem Ruf der Bühne und rettete ihr Baby: Sie sezierte das Skript, würzte ein paar Stellen und konnte mit der Bühnentechnik sogar eine bunte Monsterwolke züchten.| Sie schwebte durch den Raum während dem Finale.| Die Show wurde zum Feuerwerk für Sinne.",
                                                 "prompt": "1) Es geht eher um das Erleben von Gefühlen, oder die Wirkung einer Person auf andere. 2) Es geht eher darum, dass sich etwas schwebend durch den Raum bewegt. ",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "filler22",
                                            "string": "Petra ist Richterin.| Sie kann problemlos Argumente so tief wie Ozeane formulieren.| Zugleich klingen sie wie feine, scharfe Messer.| Sie behält immer die Fassung, aber selten bricht doch ein Damm in ihr.| Zuletzt tanke jemand vor der Fahrt sein Auto und sich selbst.| Der Fahrer knutschte schließlich den Asphalt.| Es war ein heftiger Rausch.| Das Auto war nur noch eine Flunder und es gab neben dem Fahrer zwei Verletzte.| In solch unverantwortlichen Fällen bricht in Petra ein Feuer aus und ihre Worte werden zu Raketen.",
                                                 "prompt": "1) Es geht eher um die Wirkung von Alkohol. 2) Es geht eher um die Qualität eines Erlebnisses oder einer Handlung.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                       {
                                        "item": {
                                            "id": "filler23",
                                            "string": "Harry war ein Überflieger, wenn es um Tetris ging.| Mit blitzgeölten Bewegungen rattern seine Hände über die Tasten, ansonst sah man nur eine steinerne Statue vor dem Spielautomaten.| Seine Gedanken lebten in einer Art Blase und waren immun gegen das schrille Geschnatter der zuschauenden Zaungäste.| Wie in einem Strudel gefangen schraubten sich die Tetris-Steine zu Boden.| Es war ein turbulenter Fall.| Harrys Highscore jedoch explodierte immer weiter nach oben. ",
                                                 "prompt": "1) Es geht darum, dass etwas hinabfällt. 2) Es geht um etwas wie den Verlust von Erfolg. ",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                        {
                                        "item": {
                                            "id": "filler24",
                                            "string": "Peters Musik war ein Jungbrunnen für die Sinne.| Jeden Sonntag tigerte er durch die Stadt und verzauberte sie mit seinen Beschwörungen.| Sein Instrument hatte er aus verschiedensten Trümmern zusammengegossen.| Es hatte eine gute Resonanz.| Äußerlich war es ein Monster.| Innerlich ein verspieltes Kätzchen.| Peter war ein Stern am Himmel dieser Stadt.| Er brachte Herzen zum Glühen und Berge zum Weinen.",
                                                 "prompt": "1) Es geht um akutische bzw. klangliche Eigenschaften. 2) Es geht um die Wirkung die beim Hörer ausgelöst wird.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                    {
                                        "item": {
                                            "id": "filler25",
                                            "string": "Ronja hatte schon vor Jahren das Junglefieber gepackt.| Wie nach einer Gehirnwäsche kam sie auf den Trichter,| bei einer Jungleexpedition aufzusatteln.| Ihre Eltern klopften auf Holz,| als Ronja das Nest verließ.| Als Talisman gaben sie ihr einen Wanderstab mit.| Er war aus demselben Holz geschnitzt| wie die Eingangstür ihres Hauses.| Ronja konnte sich auf die Aufregung ihrer Eltern keinen Reim machen.| Der Jungle ist kein Ponyhof, das war ihr klar.| Aber dass die Natur sie verschlucken würde, glaubte sie nicht.",
                                                 "prompt": "Ergibt das Sinn?",
                                              "options": [
                                          {
                                               "string": "ja",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "nein",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                    
                                    {
                                        "item": {
                                            "id": "filler27",
                                            "string": "Wenn Heinz Restaurants testete, verfuhr er wie ein Sieb.| Weniger gute landeten gleich auf seinem mentalen Müllhaufen.| Er wurde wütend, wenn Chocolatiers Verbrechen an einem Dessert begingen:| ‚Das ist keine Pralinenschachtel, sondern eine Portion Mensafraß.‘",
                                                 "prompt": "Wie verstehen Sie die markierte Passage? 1) Es geht um Heinz‘ Abneigung gegenüber Essen aus der Kantine. 2) Es geht um Heinz‘ allgemeine Unzufriedenheit.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "filler28",
                                            "string": "Die Gefahr, die von der Medusa ausging, war eine reißende Schlucht.| Denn ihr Blick gefror jeden, der ihm begegnete, in eine unbewegliche Puppe.| Auch als Simon sie ansah,| wurde er zum Stein.| Die Medusa war bekannt als der weiße Hai unter den Meeresgottheiten.",
                                                 "prompt": "Warum taucht hier ein Stein auf? 1) Es geht um die Verwandlung eines Menschen in ein Ding. 2) Es geht um Simons emotionale Distanziertheit.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                     {
                                        "item": {
                                            "id": "filler29",
                                            "string": "Das mobile Schulprojekt „Bücher auf Rädern“ goss Wissen wie durch Trichter in die Schüler ein.| Das Vorzeigekonzept war der glänzende Stern am Himmel des sozialen Engagements.| Schüler verschlangen nun Bücher, die in einem Bus zu ihnen kamen.| Es war eine wandelnde Bibliothek.",
                                                 "prompt": "Warum wird das Projekt als wandelnde Bibliothek bezeichnet? 1) Weil ein Bus Bücher zu den Schülern bringt. 2) Weil eine Bibliothek so umgebaut wurde, dass man sie nun als Fahrzeug benutzen kann.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                       {
                                        "item": {
                                            "id": "filler30",
                                            "string": "Das mobile Schulprojekt „Bücher auf Rädern“ sollte Wissen auch in die entlegensten Dörfer bringen.| Die Schüler vor Ort konnten für vier Wochen ein Buch aus dem Bus ausleihen| und wenn er abfuhr, erhielten die Schulen digitale Kopien.| Es war eine wandelnde Bibliothek.",
                                                 "prompt": "Warum wird das Projekt als wandelnde Bibliothek bezeichnet? 1) Weil ein Bus Bücher zu den Schülern bringt. 2) Weil eine Bibliothek so umgebaut wurde, dass man sie nun als Fahrzeug benutzen kann.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "filler31",
                                            "string": "Es schien, als könnte Erna sich alles merken.| Besonders in den Naturwissenschaften hatte sie ein beachtliches Wissen angesammelt.| Wenn es darauf ankam, konnte sie immer diejenige Information abrufen,| die im Moment entscheidend war.| Erna war eine wandelnde Bibliothek. ",
                                                 "prompt": "Warum wird Erna als wandelnde Bibliothek bezeichnet? 1) Weil sie viel weiß. 2) Weil sie viele Bücher hat.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                     {
                                        "item": {
                                            "id": "filler32",
                                            "string": "Jede neue Information wurde von Erna wie ein Buch in ihr mentales Bücherregal gestellt.| Die Abteilung für Naturwissenschaften war besonders gut sortiert.| Wenn es darauf ankam,| konnte sie immer auf dieses Archiv zurückgreifen.| Erna war eine wandelnde Bibliothek.",
                                                 "prompt": "Warum wird Erna als wandelnde Bibliothek bezeichnet? 1) Weil sie viel weiß. 2) Weil sie viele Bücher hat.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                      {
                                        "item": {
                                            "id": "filler33",
                                            "string": "Jeder wusste, dass es gefährlich war, der Medusa direkt in die Augen zu sehen.| Auch Simon hatte man gewarnt, doch es war schon zu spät| und so wurde er zum Stein.| Ihr Blick hatte ihn durchbohrt und verwandelte ihn in leblose Materie. ",
                                                 "prompt": "Warum taucht hier ein Stein auf? 1) Es geht um die Verwandlung eines Menschen in ein Ding. 2) Es geht um Simons emotionale Distanziertheit.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    },
                                    
                                           {
                                        "item": {
                                            "id": "filler35",

                                            "string": "Lea hatte sich angewöhnt,| ihren Bruder Matti nur noch als das Grab der Familie vorzustellen,| seit dieser immer mehr in den dunklen Machenschaften einer Bande Kleinkrimineller aufging.| Er empfand sein neues Leben hingegen durchaus als Bereicherung| und hatte keine Ahnung,| warum sie ihm vorwarf,| er würde das Gold der Familie versilbern.",
                                                "prompt": "Sind Sie auch der Meinung, das Familiengold sollte besser nicht versilbert werden? 1) Ja/Nein 2) Das ist egal, Lea geht es um etwas anderes.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    },      
                                    
                                     {
                                        "item": {
                                            "id": "filler36",

                                            "string": "Julie war nach Julians Aussage eine heiße Olle,| die er nicht, ohne sein Bein zu heben,| an der Ecke würde stehengelassen haben -| wenn sie einmal beim Sex auf ihn warten würde.| So aber wie die Dinge lagen,| konnte er stets nur zusehen,| wie sie schon den nächsten vernaschte, statt zu warten,| bis er denn endlich gekommen war.",
                                                  "prompt": "Finden Sie es schlimm, wenn jemand zu spät zu einem Date kommt? 1) Jein 2) Ich glaube, es geht hier um etwas anderes.",
  "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                        
                    ]
                                        }
                                        },
                                      
                                            {
                                        "item": {
                                            "id": "filler37",

                                            "string": "Eigentlich sollten die Figuren im Regal dafür sorgen,| dass Erna stets alle Hände voll zu tun hatte, wenn sie staubwedelnd durch die Wohnung fegte.| Die Putzfee hatte jedoch ein Geistesblitz ereilt,| als sie einmal zufällig lange genug vor einem der Staubfänger verweilt war.| Man musste bei manchem Reinigungsakt einfach| ein Auge zudrücken,| dann säuberten sich die Regale wie von sebst.| Ihre Kinder waren ohnehin blind für den Dreck.",
                                                "prompt": "Versuchen Sie, zu beantworten, warum <ein Auge zugedrückt> werden soll: 1) Damit man den Dreck nicht sieht. 2) Weil man nicht immer alles perfekt machen muss.",
                                              "options": [
                                          {
                                               "string": "(1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "(2)",
                                               "feedback": "okay."
                        }
                    ]
                                        } 
                                    },  
                                    
                                      {
                                        "item": {
                                            "id": "filler34",
                                            "string": "Privat und beruflich langweilte Heinz sich schon lange.| Er glaubte nicht mehr an Überraschungen,| sondern fühlte nur noch Stagnation.| Er mochte sein Leben nicht und sagte:| ‚Das ist keine Pralinenschachtel, sondern eine Portion Mensafraß.‘",
                                                 "prompt": "Wie verstehen Sie die markierte Passage? 1)Es geht um Heinz‘ Abneigung gegenüber Essen aus der Kantine. 2) Es geht um Heinz‘ allgemeine Unzufriedenheit.",
                                              "options": [
                                          {
                                               "string": "1)",
                                               "feedback": "okay."
                        },
                        {
                                               "string": "2)",
                                               "feedback": "okay."
                        }
                    ]
                                        }
                                    }
                                    
                                    
                                    
                                ]
                            }
                        }                         ///end filler group

                            /// klammern schlieszen: ] } } ] }
                    ]
                }
            }
        ]
    },
    "ending-screens":[ {
        "id": "instruction4",
        "string": "ENDE des test. danke."
    }]
};