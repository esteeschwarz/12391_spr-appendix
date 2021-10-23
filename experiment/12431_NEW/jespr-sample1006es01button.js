/*
 * Title: jespr-sample1.js
 * Author: Ralph L. ROSE
 * E-mail address: rose@waseda.jp
 * Description: This file defines an experimental design to be used in a
 * JESPR experiment.
 * License: The MIT License (MIT)
 */


var jesprExperimentDesignForButton = { //actuel 11284///// items in: 2,5,6,10,11,12,18,26
    "title": "[ESTEE EXT.]",
    "investigators":[ {
        "primary": "[SPACE]"
    }, {
        "other": ""
    }],
    "font-name": "courier",
    "font-size": "14",
    "text-color": "black",
    "background-color": "lightgray",
    "display": "moving-window",
    "orientation": "vertical", //-horizontal
    "masking-character": ".",
    "fixation-character": "X",
    "min-instruction-time": "100",
    "show-progress-bar": "true",
    "input-method": "html-button",
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
        "string": "...[SPACE]..."
    }, {
        "id": "instruction2",
        "string": "...[PRESS]..."
    }],
    "practice-stimuli": {
        "order": "fixed",
        "items":[ {
            "item": {
                "id": "practice01",
                "string": "...[SPACE]...",
            
            }
        }, {
            "item": {
                "id": "practice02",
                "string": "...[PRESS]...",
          
            }
            
          
            
        },   {
            "item": {
                "id": "practice03",
                "string": "...[SPACE]...",
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
        "string": "12431."
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
                                            "id": "EM001",
                                            "tags": [ "RUB", "1EM" ],
                                            "string": "ewig alles ablegen, das dich erinnern will.| so wirst du ins grosze fahrtenbuch der andern eingeschrieben,| auch wenn alles längst aus dir geht.| {aber halte die asche dieses lebens noch fest,} |die dir von ihnen geblieben.| nur entledige dich, wachse heran zu ihrem einzigen grund.",
                     
                                        } 
                                    },      
                                    
                            {
                                        "item": {
                                            "id": "EM002",
                                            "tags": [ "RUB", "2EM" ],
                                            "string": "das Wort ist nur Chirurg geblieben |so lange als ich ihm erlaubte| {die Hände warm zu halten}| vor dem Hirn dem ewig kalten Ort| da geht es hin |da bleibt es ungeglaubt| die Hände werden einmal steif und kalt uns abwehrn| unsere Hände die wir ewig lieben| nur das Wort bleibt uns erhalten Chirurgie| verlassen und die Wände die mich einsperrn| trösten wird die Elegie",
                     
                                        } 
                                    },      
                                    
                                    
                                 
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
                                            "id": "SM001",
                                            "tags": [ "RUB", "1SM" ],
                                            "string": "legen ab mit dem dampfer. |das land in front, wir fahren rückwärts?| weisz nicht, wie weit das zweite ufer noch weg, |irgend nebel liegt über dem meer. |{halte die asche dieses lebens noch fest,} |die ich lang gesammelt habe. |in berlin wächst der kompost auf dem brandplatz.",
                    
                                        }
                                    },
                                    
                                
                                    
                                 
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
                                            "id": "LC002",
                                            "tags": [ "RUB", "2LC" ],
                                            "string": "etwa aufgeworfene felder gegen das neue jahr;| also abgeerntet, gepflügt, |zarter grüner flaum darauf.| {man sieht die lange zeit noch dazwischen,}| den winter, der nochnicht ist.| es legen sich alle zur ruhe.",
                                         }
                                    }, 
                                      {
                                        "item": {
                                            "id": "LC001",
                                            "tags": [ "RUB", "1LC" ],
                                            "string": "ich stelle mir vor: |die weggegabelte entscheidung, |{ca. der reine bezug. }|am andern ende die verkabelung ist ausgelöst, |weil import  des datamaterial lange verschoben. |hier nurkreisen von motten. |in merkwürdigen kreisen. |kann das nicht richtig sehen, |was sie ins holz schreiben, |aber ich bin mir sicher, |sie haben etwas zu sagen. |soll keine fehler schreiben. |soll keine gebärden mehr.",
                                         }
                                    }
                           
                                              
      
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
                                            "id": "FIL002",
                                            "tags": [ "RUB", "2FIL" ],
                                            "string": "zählen Sie uns zu den mandeln. |wie weit wir uns verausgaben..., |alle striche stets umsonst.| warum wir füllmaterial brauchen: |das geschäft mit dem humus vielleicht, |{darin ihr alle aufgehoben der auferstehung entgegen usw.,}| bis :namen: :orte: verschwimmen. |(land) überall.| eure scheisz heimat im geiste.| zählen Sie mich zur mandel hinzu.",
                    
                                        } 
                                    },   
                                    
                                    
 {
                                        "item": {
                                            "id": "EM003",
                                            "tags": [ "RUB", "1MM" ],
                                            "string": "mönch am meer,| der in den sand, der in die wiedergeborene linie am morgen |{seinen fusz setzt.}| wägt den tag ab: |eine neue aufgabe, |eine die wartet, |eine die jetzt schon vergangen.",
                    
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
                      
                       ///end filler group

                            /// klammern schlieszen: ] } } ] }
                    ]
                }
            }
        ]
    },
    "ending-screens":[ {
        "id": "instruction4",
        "string": "[12431.fin v6.0]"
    }]
};