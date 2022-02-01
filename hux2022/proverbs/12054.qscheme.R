
#12054.item XML schemes

#import data
#xmlschema
qscheme <- read.csv("~/boxHKW/21S/HU X/experiment/gith/12032/12431_hux2021-appendix/hux2022/proverbs/12054_qscheme/qscheme.csv", sep=";")

#itemtabelle
templ <- read.csv("~/boxHKW/21S/HU X/experiment/gith/12032/12431_hux2021-appendix/hux2022/proverbs/12054_qscheme/template.csv", sep=";")

#per item:
#2 leerzeilen
#6 *2 optionen
#14 zeilen
#3,4 A1
#5,6 A2



check1<-2+6*2
print(qscheme$answer[1:14])
qscheme$answer[13]<-"test change"
print(qscheme$answer[1:14])
#works, restor
qscheme$answer[13]<-qscheme$answer[14]
print(qscheme$answer[1:14])
#works.
## assign template
qscheme$answer[13]<-template$A5[1]
print(qscheme$answer[1:14])
#works
opt1<-1
opt2<-opt1*2
#loop

for (x in opt1:length(qscheme$itemid)) {
  optv<-opt1*x
  optv1<-optv/14
  print(optv1)
  #wenn x ein vielfaches von 14 ist

  }

14*64
#896
64/4

questid<-c(1:optv1)
opv1<-questid
#now double each
questid2<-c(0,0,opv1[1],opv1[1],opv1[2],opv1[2],opv1[3],opv1[3],opv1[4],opv1[4],opv1[5],opv1[5],opv1[6],opv1[6])
print(questid2)
#now loop
#16 item, 4 gruppen, 2*(6 optionen+ 1 leerzeile)
16*7*2*4 #896
896/14 #64 items
#x2 loop formel:
768/6 #128
64*2
128*6
16*6*2

#x2 in 6er schritten
16*6*2*4 #768
x2f<-c(1:128)
x2f2<-x2f*6
x2f3<-
#for(x3 in 1){
rr<-(function(x,y){z<-x^2+y^2;x+y+z})(0:7,2)
norm<-function(x) x*6
x2f3<-c(norm(1:64))
print (x2f3)  
  fill<-  function(id5){
id0<-c()      
id1<-c()      

    #append(id0, 1:5, after =3)
for (x1 in 1){
#x2<-x1+6
  #inner loop 1
for (x in x2f2) {
questid3<-c(0,0,x,x,x+1,x+1,x+2,x+2,x+3,x+3,x+4,x+4,x+5,x+5)
print(questid3)
id1<-append(id0,questid3)
}
#  print(questid3)
  #return this to vector!
#id0<-c()  
#id2<-append(id1,questid3)
#questid4<-c(questid3[1]:length(questid3))  
}
}
print(id0)
questid4

print(questid3)
print(questid4)

#let two rows empty, then put numbers 1-6 each twice in the following rows.
#then let again 2 rwos empty, put numbers 7-12 and so on






#A1_1<-c(opt0*3,opt0*4)
#A1_2<-c(opt1*5,opt1*6)
opv1[2]
#created row with length of options complete
check2<-optv/16/4 #16 items in 4 gruppen
check3<-check2/check1  #should be 1


# how to fill in questionid row 29-42 with two empty + 2*6

print(qscheme$questionid[29:42])



