##ST.SCHWARZ/11351b/HUX20210829(00.47)

##von hier der reihe nach:

##begin
library(lme4)
library(lmerTest)
library(stringi)


sprdataprepared <- read.csv("https://common.rotefadenbuecher.de/uni/public/jespr/modified/sprdataprepared.csv", sep=";")
##View(sprdataprepared)
##top datenframe aus datei, gueltige faelle, target 0+1
sprdatasm<-sprdataprepared
##sprdatasm<-sprdata11342dtaxp ##fuer laden aus dateisystem, importiertes set hier einsetzen
#dtatargetgilt<-subset(sprdatasm, gilt==1)
#for complete dataset next
dtatargetgilt<-sprdatasm
#select filter for target:
#wenn mit adinterval gerechnet werden soll, musz target==0 ausgewaehlt werden.

dtatarget<-sprdatasm
dtatargetcpt<-subset(dtatargetgilt, target==0|target==1|target==-1)
dtatarget0<-  subset(dtatargetgilt, target==0)
dtatarget1<-  subset(dtatargetgilt, target==1)

dtatarget01<- subset(dtatargetgilt, target==0|target==1) 
##hier sampleauswahl modifizieren
#dtatarget<-dtatargetcpt
dtatarget<-dtatarget01
#dtatarget<-dtatarget0
#choose labeling >
#boxlabtgt<-", target 0"
boxlabtgt<-", target 0+1"
#----------------------
#für descriptive analysis denselben filter verwenden
## hier denselben filter auswaehlen wie oben
#subdescr<-subset(sprdatasm,target==-1|target==0|target==1)
#subdescr<-subset(sprdatasm,target==0|target==1)
#subdescr<-subset(sprdatasm,target==0)
subdescr<-dtatarget
#------------------

#berechne outliers zeichenunabhängig
#outliers.formula
#outl.form1<-dtatarget$adinterval
outl.form2.0<-dtatarget$timeinterval
#outl.form2.1<-dtatarget1$timeinterval

#outl.form0<-outl.form2.0
#outl.form1<-outl.form2.1

outl.form<-outl.form2.0

sprmean<-mean(outl.form)
stdev<-sd(outl.form)
sdout<-stdev*2.5
outtop<-sprmean+sdout
outbottom<-sprmean-sdout ## negative
outbottommod<-319
#discard outliers according to subset
liste<-subset(dtatarget,timeinterval<outtop&timeinterval>outbottommod)

#berechne outliers zeichenabhängig####
#charsalle<-stri_count_boundaries(dtatarget$string,type="character")
#listeCH<-dtatarget$timeinterval/charsalle
#outAmean<-mean(listeCH)
#outAsd<-sd(listeCH)
#outAsd<-outAsd*2.5
#outAtop<-outAmean+outAsd
#outAbottom<-319
#outAliste<-listeCH[listeCH<outAtop]

#discard outliers target 1
#sprmean<-mean(outl.form1)
#stdev<-sd(outl.form1)
#sdout<-stdev*2.5
#outtop<-sprmean+sdout
#outbottom<-sprmean-sdout ## negative
#outbottommod<-319
#discard outliers according to subset
#liste1<-subset(dtatarget1,timeinterval<outtop&timeinterval>outbottommod)


#discard outliers according to subset
liste<-subset(dtatarget,timeinterval<outtop&timeinterval>outbottommod)
dtatarget<-liste

#count with chars berechnet by R
tgt0proof<-subset(liste,target==0)
tgt1proof<-subset(liste,target==1)


##sd(dtatarget$wds)
##sm-em-lc-mm kategorien in spalte $group
sm<-"SM"
em<-"EM"
lc<-"LC"
mm<-"MM"
##hier kategorien x vs y einsetzen comme: (...group==sm|...group==em)
##liste<-subset(dtatarget,dtatarget$group==x|dtatarget$group==y)
SMvsEM<-subset(dtatarget,group==sm|group==em)
SMvsLC<-subset(dtatarget,group==sm|group==lc)
SMvsMM<-subset(dtatarget,group==sm|group==mm)
EMvsLC<-subset(dtatarget,group==em|group==lc)
EMvsMM<-subset(dtatarget,group==em|group==mm)
LCvsMM<-subset(dtatarget,group==lc|group==mm)
##dies hier fuer die auswertung single metaphor vs. other
X_SMvsO<-dtatarget$category



##Length-corrected RTs were computed by regressing the remaining raw RTs 
##onto word length using linear mixed effects regression. 
##In addition to a single main effect of word length, this model included a 
##random intercept for subject, and a by-subject random slope for length 
##(these random effects allow the model to discount mean differences in raw RT across 
##subjects as well as variable sensitivity to the effect of word length across subjects). 
##The residuals of this model, length-corrected RTs, served as the dependent variable in 
##all analyses reported below. 
##Qualitatively identical results are obtained if raw RTs are used instead. 
##(Fine, Alex B et al. “Rapid Expectation Adaptation During Syntactic Comprehension.” PloS one 8.10 (2013))

#extract targetlength
charsA<-stri_count_boundaries(SMvsEM$string,type="character")
charsB<-stri_count_boundaries(SMvsLC$string,type="character")
charsC<-stri_count_boundaries(SMvsMM$string,type="character")
charsD<-stri_count_boundaries(EMvsLC$string,type="character")
charsE<-stri_count_boundaries(EMvsMM$string,type="character")
charsF<-stri_count_boundaries(LCvsMM$string,type="character")
charsG<-stri_count_boundaries(dtatarget$string,type="character")

#s.o.
lme1<-lme1.formula.1<-(timeinterval ~ charsA + (1|participant)+(1+charsA:participant))
lme2<-lme1.formula.2<-(timeinterval ~ charsB + (1|participant)+(1+charsB:participant))
lme3<-lme1.formula.3<-(timeinterval ~ charsC + (1|participant)+(1+charsC:participant))
lme4<-lme1.formula.4<-(timeinterval ~ charsD + (1|participant)+(1+charsD:participant))
lme5<-lme1.formula.5<-(timeinterval ~ charsE + (1|participant)+(1+charsE:participant))
lme6<-lme1.formula.6<-(timeinterval ~ charsF + (1|participant)+(1+charsF:participant))
lme7<-lme1.formula.7<-(timeinterval ~ charsG + (1|participant)+(1+charsG:participant))

#choose formula by changing 1 / 2
#lme1<-lme1.formula.2
#lme1<-lme1.formula.1
#


tgt0proof<-subset(dtatarget,target==0)
tgt1proof<-subset(dtatarget,target==1)


RT_1<-lmer((lme1),SMvsEM)
RT_2<-lmer((lme2),SMvsLC)
RT_3<-lmer((lme3),SMvsMM)
RT_4<-lmer((lme4),EMvsLC)
RT_5<-lmer((lme5),EMvsMM)
RT_6<-lmer((lme6),LCvsMM)
RT_7<-lmer((lme7),dtatarget)



##1. lme modeling
#resixp[x]=um den effekt der zeichenanzahl korrigierte(s.o.) response(timeinterval) for further processing
resixp1<-residuals(RT_1)
resixp2<-residuals(RT_2)
resixp3<-residuals(RT_3)
resixp4<-residuals(RT_4)
resixp5<-residuals(RT_5)
resixp6<-residuals(RT_6)
resixp7<-residuals(RT_7)


#rubio-fernandez:
#"We constructed 3 lists of materials, each containing 7 items of each experimental 
#condition (Extended Metaphor, Single Metaphor and Literal)"
#"In the model, we posited a main effect of Category (single vs. other) 
#and random effects of Participant and Item, along with a random slope of Category by Participant"
#"pairwise comparisons of Condition levels"

#choose between "item"(R/F) above interpreted as itemset (8) of four conditions ($item) or 
#item as condition (4x8) of item ($itemId)
#lme2.form1<- paste0("group +(1|item)+(1|participant)+(1+group|participant)")
lme2.form2<- paste0("group +(1|itemId)+(1|participant)+(1+group|participant)")
#lme2.formL<-paste0("(timeinterval/char)~")
lme2.formZ<-paste0("category +(1|itemId)+(1|participant)+(1+category|participant)")
#ohne length corrected RTs
lme3.formZ <-paste0("timeinterval~category +(1|itemId)+(1|participant)+(1+category|participant)")
#lme3.formrf<-paste0("timeinterval~group +(1|itemId)+(1|participant)+(1+group|participant)")
#formel auswählen
#(fmla1 <- as.formula(paste(lme2.formL, lme2.form1)))
lme2.form<-lme2.form2
#fmlarf   <-lme3.formrf
#fmlaZ    <-lme3.formZ

(fmla1 <- as.formula(paste("resixp1 ~ ", lme2.form)))
(fmla2 <- as.formula(paste("resixp2 ~ ", lme2.form)))
(fmla3 <- as.formula(paste("resixp3 ~ ", lme2.form)))
(fmla4 <- as.formula(paste("resixp4 ~ ", lme2.form)))
(fmla5 <- as.formula(paste("resixp5 ~ ", lme2.form)))
(fmla6 <- as.formula(paste("resixp6 ~ ", lme2.form)))
(fmla7 <- as.formula(paste("resixp7 ~ ", lme2.formZ)))

#(fmla7 <- as.formula(paste("timeinterval ~ ", lme2.formZ)))


#(fmla0<-as.formula(paste(lme2.formL,lme2.form)))
#(fmlaZ<-as.formula(paste(lme2.formL,lme2.formZ)))


(sumSMEM<- lmer(fmla1,SMvsEM)) 
(sumSMLC<- lmer(fmla2,SMvsLC)) 
(sumSMMM<- lmer(fmla3,SMvsMM)) 
(sumEMLC<- lmer(fmla4,EMvsLC)) 
(sumEMMM<- lmer(fmla5,EMvsMM)) 
(sumLCMM<- lmer(fmla6,LCvsMM)) 
(sumSMvsO<-lmer(fmla7,dtatarget)) 

#ohne berücksichtigung der targetlänge analog r/f
#nicht sinnvoll siehe C.2/C.3
#(sumSMEM<- lmer(fmlarf,SMvsEM)) 
#(sumSMLC<- lmer(fmlarf,SMvsLC)) 
#(sumSMMM<- lmer(fmlarf,SMvsMM)) 
#(sumEMLC<- lmer(fmlarf,EMvsLC)) 
#(sumEMMM<- lmer(fmlarf,EMvsMM)) 
#(sumLCMM<- lmer(fmlarf,LCvsMM)) 
#(sumSMvsO<-lmer(fmlaZ,dtatarget)) 


#(sumSMEM<- lmer(fmla0,SMvsEM)) 
#(sumSMLC<- lmer(fmla0,SMvsLC)) 
#(sumSMMM<- lmer(fmla0,SMvsMM)) 
#(sumEMLC<- lmer(fmla0,EMvsLC)) 
#(sumEMMM<- lmer(fmla0,EMvsMM)) 
#(sumLCMM<- lmer(fmla0,LCvsMM)) 
#(sumSMvsO<-lmer(fmlaZ,dtatarget01)) 

summary(sumSMEM)
summary(sumSMLC)
summary(sumSMMM)
summary(sumEMLC)
summary(sumEMMM)
summary(sumLCMM)
summary(sumSMvsO)

##
#SPR_X=RT1
#SPR_X=liste$timeinterval
#SPR_X=liste$addproct
#SPR_X=liste$rt_corr

s1<-paste0("SMvsEM",boxlabtgt)
s2<-paste0("SMvsLC",boxlabtgt)
s3<-paste0("SMvsMM",boxlabtgt)
s4<-paste0("EMvsLC",boxlabtgt)
s5<-paste0("EMvsMM",boxlabtgt)
s6<-paste0("LCvsMM",boxlabtgt)
s7<-paste0("SMvsOther",boxlabtgt)

#png(file='sprexpo001.png')
#plot(sumSMvsO,type=c("p","smooth")) ## fitted vs residual
#dev.off()

plottype<-"h" ## p points,l lines,b both,c ,o,h histogram,s steps

plot(sumSMEM,type=c(plottype,"smooth"),main=s1)
plot(sumSMLC,type=c(plottype,"smooth"),main=s2)
plot(sumSMMM,type=c(plottype,"smooth"),main=s3)
plot(sumEMLC,type=c(plottype,"smooth"),main=s4)
plot(sumEMMM,type=c(plottype,"smooth"),main=s5)
plot(sumLCMM,type=c(plottype,"smooth"),main=s6)
plot(sumSMvsO,type=c(plottype,"smooth"),main=s7) ## fitted residuals
#---------------------------------------------------------------------


#---C---  compare R/F results:-----------------------
#For these raw data, the mean reading time for the critical segments in the 
#Literal condition was       1457 ms (SD 727 ms), in the 
#Extended Metaphor condition 1543 ms (SD 764 ms), and in the 
#Single Metaphor condition   1578 ms (SD 768 ms).
#LC < EM < SM
#C.1
#here results reading time RAW, target 0
#SM: 1623, sd: 834
#EM: 1761, sd: 1648
#LC: 1835, sd: 1304
#MM: 1777, sd: 958
#SM < EM < MM < LC
#(without outliers): the mean response times for the critical segments were 
#1421 ms (SD 650 ms) in the Literal condition, 
#1498 ms (SD 716 ms) in the Extended Metaphor condition, 
#1537 ms (SD 716 ms) in the Single Metaphor condition.
#LC < EM < SM
#C.2
#without outliers (2,5sd),
#      SM       EM       LC      ISM
#1874.245 1689.975 1838.101 1896.411
#rank:  3         1       2        4
#std dev
#      SM       EM       LC      ISM
#790.7908 804.7236 817.7403 858.2711


#C.3
#with respect to target length  > LSAc - LSDc
#SM: 1874, sd: 790
#EM: 1689, sd: 804
#LC: 1838, sd: 817
#MM: 1896, sd: 858
#EM < LC < SM < MM

#mean LZ bei target 0+1, without outliers, mean target0+1=54 zeichen
#      SM       EM       LC      ISM
# 2111.147 2205.45 2254.458 2319.808
#rank:   1       2       3         4
#std dev
#      SM       EM       LC      ISM
#965.6856 1052.556 1025.115 1081.137


#----
#lme4:
#(R/F): with the Single condition being read slower than the others (coefficient = 77.3, SE = 24.9, t = 3.10, p < 0.01)
#here: coef=13.89, SE=105.86, t=0.131, n.s. ($itemID)
#no significant difference between Extended and Single metaphors (coefficient = 38.4, SE = 29.7, t = 1.30, n.s.)
#here: coef=61.8, SE=96.31, t=0.642, n.s.
#highly significant differences between each of these and the Literal condition 
#Literal vs. Extended: coefficient = 75.3, SE = 28.2, t = 2.68, p < 0.01; 
#here: coef=33.96, SE=98.24,t=0.346
#Literal vs. Single:  coefficient = 114.7, SE = 28.6, t = 4.00, p < 0.001).
#here: coef=11.159,SE=96.514,t=0.116
#SPEED:
#SM < Others
#
#hier resultate zeichenunabhängig, target 0+1:
#SM vs Others:
#coef = 77.94, SE = 241.47, t=-0.323, p < 0.001

#------------------------------------------------
##bis hier



##---D----------descriptive analysis



#count characters of target
chars1<-stri_count_boundaries(SMvsEM$string,type="character")
chars2<-stri_count_boundaries(SMvsLC$string,type="character")
chars3<-stri_count_boundaries(SMvsMM$string,type="character")
chars4<-stri_count_boundaries(EMvsLC$string,type="character")
chars5<-stri_count_boundaries(EMvsMM$string,type="character")
chars6<-stri_count_boundaries(LCvsMM$string,type="character")
chars7<-stri_count_boundaries(liste$string,type="character")

#subsets kategorienvergleich
SSM<-subset(subdescr,group=="SM")
SEM<-subset(subdescr,group=="EM")
SLC<-subset(subdescr,group=="LC")
SMM<-subset(subdescr,group=="MM")

chars <-stri_count_boundaries(subdescr$string,type="character")
meanch<-mean(chars)
sdch<-sd(chars)

charsA<-stri_count_boundaries(SSM$string,type="character")
charsB<-stri_count_boundaries(SEM$string,type="character")
charsC<-stri_count_boundaries(SLC$string,type="character")
charsD<-stri_count_boundaries(SMM$string,type="character")

#anzahl observationen / kategorie
obsA<-length(SSM$timeinterval)
obsB<-length(SEM$timeinterval)
obsC<-length(SLC$timeinterval)
obsD<-length(SMM$timeinterval)

#R/F der reihe nach > mean response
meanRTrawA<-mean(SSM$timeinterval)
meanRTrawB<-mean(SEM$timeinterval)
meanRTrawC<-mean(SLC$timeinterval)
meanRTrawD<-mean(SMM$timeinterval)
#standardabweichung response
sdRTrawA<-sd(SSM$timeinterval)
sdRTrawB<-sd(SEM$timeinterval)
sdRTrawC<-sd(SLC$timeinterval)
sdRTrawD<-sd(SMM$timeinterval)

#discard outliers zeichenunabhängig
LZT<-subdescr$timeinterval
LZTdev<-sd(LZT)
LZTout<-LZTdev*2.5
LZTmean<-mean(LZT)
LZTouttop<-LZTmean+LZTout
LZToutbottom<-LZTmean-LZTout
#outbottom manuell 319ms
LZTbottommod<-319
LZTliste<-subset(subdescr,timeinterval<LZTouttop&timeinterval>LZTbottommod)

#subsets kategorienvergleich
SSMo<-subset(LZTliste,group=="SM")
SEMo<-subset(LZTliste,group=="EM")
SLCo<-subset(LZTliste,group=="LC")
SMMo<-subset(LZTliste,group=="MM")
proofset1<-length(SSMo$lfd)+length(SEMo$lfd)+length(SLCo$lfd)+length(SMMo$lfd)


meanRTA<-mean(SSMo$timeinterval)
meanRTB<-mean(SEMo$timeinterval)
meanRTC<-mean(SLCo$timeinterval)
meanRTD<-mean(SMMo$timeinterval)
#standardabweichung response
sdRTA<-sd(SSMo$timeinterval)
sdRTB<-sd(SEMo$timeinterval)
sdRTC<-sd(SLCo$timeinterval)
sdRTD<-sd(SMMo$timeinterval)

#outliers berechnen zeichenabhängig
LZcpt<-subdescr$timeinterval/chars
LZdev<-sd(LZcpt)
LZout<-LZdev*2.5
LZmean<-mean(LZcpt)
LZouttop<-LZmean+LZout
LZoutbottom<-LZmean-LZout
#outbottom manuell 319ms
LZbottommod<-319/meanch

#LZSMa<-(LZSM[LZSM<LZouttop&LZSM>LZbottommod])
#LZEMa<-(LZEM[LZEM<LZouttop&LZEM>LZbottommod])
#LZLCa<-(LZLC[LZLC<LZouttop&LZLC>LZbottommod])
#LZMMa<-(LZMM[LZMM<LZouttop&LZMM>LZbottommod])
#proofset2<-length(LZSMa)+length(LZEMa)+length(LZLCa)+length(LZMMa)


#lesezeit
#LZSM<-(SSM$timeinterval/charsA)/obsA*obsA*meanch
#LZEM<-(SEM$timeinterval/charsB)/obsB*obsA*meanch
#LZLC<-(SLC$timeinterval/charsC)/obsC*obsA*meanch
#LZMM<-(SMM$timeinterval/charsD)/obsD*obsA*meanch



LZSM<-(SSM$timeinterval/charsA)
LZEM<-(SEM$timeinterval/charsB)
LZLC<-(SLC$timeinterval/charsC)
LZMM<-(SMM$timeinterval/charsD)

#with discard outliers
LZSM<-(LZSM[LZSM<LZouttop&LZSM>LZbottommod])
LZEM<-(LZEM[LZEM<LZouttop&LZEM>LZbottommod])
LZLC<-(LZLC[LZLC<LZouttop&LZLC>LZbottommod])
LZMM<-(LZMM[LZMM<LZouttop&LZMM>LZbottommod])

#check number obs. after discard outliers
proofset2<-length(LZSM)+length(LZEM)+length(LZLC)+length(LZMM)

#lesezeit / durchschnittliche targetphrase (zeichenabhängig)
LZSMc<-LZSM*meanch
LZEMc<-LZEM*meanch
LZLCc<-LZLC*meanch
LZMMc<-LZMM*meanch
#mean LZ
LSAc<-mean(LZSMc)
LSBc<-mean(LZEMc)
LSCc<-mean(LZLCc)
LSDc<-mean(LZMMc)

#sd LZ
LSAsd<-sd(LZSMc)
LSBsd<-sd(LZEMc)
LSCsd<-sd(LZLCc)
LSDsd<-sd(LZMMc)
boxLZsd<-cbind(SM=LSAsd,EM=LSBsd,LC=LSCsd,ISM=LSDsd)


#summe LZ abhängig von zeichenanzahl und anzahl observationen
sum1<-sum(LZSMc)/obsA
sum2<-sum(LZEMc)/obsB
sum3<-sum(LZLCc)/obsC
sum4<-sum(LZMMc)/obsD

#lab1<-paste0("basis durchschnittliche targetlaenge=", round(meanch), " zeichen")
#boxLZmn<-cbind(SM=LSAc,EM=LSBc,LC=LSCc,ISM=LSDc)
#boxplot(boxLZmn,main="mean Lesezeit (ms)",xlab=lab1)

#sum1<-sum(LZSM)/obsA
#sum2<-sum(LZEM)/obsB
#sum3<-sum(LZLC)/obsC
#sum4<-sum(LZMM)/obsD


#differenz zwischen kategorien
difsmem<-sum1-sum2
difsmlc<-sum1-sum3
difsmmm<-sum1-sum4
#SM < em < mm < lc
difemlc<-sum2-sum3
difemmm<-sum2-sum4
diflcmm<-sum3-sum4
dfksmem<-sum1/sum2

#LZSM<-(SSM$timeinterval/SSM$char)
#LZEM<-(SEM$timeinterval/SEM$char)/72*76
#LZLC<-(SLC$timeinterval/SLC$char)/66*76
#LZMM<-(SMM$timeinterval/SMM$char)/73*76

#LZSMd<-(1/(speedSM*meanchar))
#LZSM<-(1/(charsSMad/SSM$adinterval))*meanchar


#adinterval=lesezeiten target(0) + lesezeit target(1) (*1000ms)
#speedSMd<-(SSM$addchar/SSM$adinterval*1000)
#speedLCd<-(SLC$addchar/SLC$adinterval*1000)
#speedEMd<-(SEM$addchar/SEM$adinterval*1000)
#speedMMd<-(SMM$addchar/SMM$adinterval*1000)

#LZ addierte 0+1 speed * durchschnittliche zeichenanzahl 0+1
#LZSMd<-(1/(SSM$addchar/SSM$adinterval)*meanadchar)
#LZLCd<-(1/(SEM$addchar/SEM$adinterval)*meanadchar)
#LZEMd<-(1/(SLC$addchar/SLC$adinterval)*meanadchar)
#LZMMd<-(1/(SMM$addchar/SMM$adinterval)*meanadchar)


#LZ median added 0+1
#LSAdmd<-median(LZSMd)
#LSBdmd<-median(LZEMd)
#LSCdmd<-median(LZLCd)
#LSDdmd<-median(LZMMd)

#median speed added 0+1
#mdLZA<-median(LZSM)
#mdLZB<-median(LZEM)
#mdLZC<-median(LZLC)
#mdLZD<-median(LZMM)

mdLZA<-median(LZSMc)
mdLZB<-median(LZEMc)
mdLZC<-median(LZLCc)
mdLZD<-median(LZMMc)

#differenzen median kategorien
difsmem<-mdLZA-mdLZB
difsmlc<-mdLZA-mdLZC
difsmmm<-mdLZA-mdLZD
#SM < em < mm < lc
difemlc<-mdLZB-mdLZC
difemmm<-mdLZB-mdLZD
diflcmm<-mdLZC-mdLZD
dfksmem<-sum1/sum2

labx<-paste0("Basis durchschnittliche targetlaenge=", round(meanch), " zeichen")
toplab<-paste0("Lesezeiten (ms)",boxlabtgt)

boxLZ<-cbind(SM=LZSMc,EM=LZEMc,LC=LZLCc,ISM=LZMMc)
#boxplot(boxLZ,main="mean Lesezeiten gesamt in ms/106 zeichen fuer target+1",xlab="106 Zeichen = durchschnittliche Laenge target 0+1")
boxplot(boxLZ,main=toplab, xlab=labx,notch=TRUE,col=c(1,2,3,4))

toplab<-paste0("median Lesezeiten (ms)",boxlabtgt)
boxLZmd<-cbind(SM=mdLZA,EM=mdLZB,LC=mdLZC,ISM=mdLZD)
boxplot(boxLZmd,main=toplab,xlab=labx)

toplab<-paste0("mean Lesezeiten (ms)",boxlabtgt)
lab1<-paste0("basis durchschnittliche targetlaenge=", round(meanch), " zeichen")
boxLZmn<-cbind(SM=LSAc,EM=LSBc,LC=LSCc,ISM=LSDc)
boxplot(boxLZmn,main=toplab,xlab=lab1)


#boxLZad<-cbind(SM=LZSMd,EM=LZEMd,LC=LZLCd,MM=LZMMd)
#boxplot(boxLZad,main="Lesezeiten gesamt in ms/106 zeichen fuer target+1",xlab="106 Zeichen = durchschnittliche Laenge target 0+1",notch=TRUE,col=c(1,2,3,4))

#plot median addierte lesezeiten
#boxLZmd<-cbind(SM=mdspAd,EM=mdspBd,LC=mdspCd,ISM=mdspDd)
#boxplot(boxLZmd,main="median Lesezeiten gesamt in ms/106 zeichen fuer target 0+1",xlab="106 Zeichen = durchschnittliche Laenge target 0+1")

#boxspeed <- cbind(SM = speedSM, EM = speedEM,LC = speedLC, MM = speedMM)
#boxplot(boxspeed,main="lesegeschwindigkeit chars/sec bei target 0+1")

##---END 2---

#12373.
#coefficients(sumSMEM)
