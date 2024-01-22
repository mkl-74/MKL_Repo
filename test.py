#dictionnaire

stock = {'pommes':'40', 'prunes' : '200', 'raisin' : '55'}
print("Veuillez saisir le fruit souhaité ?")
index = input()
print("il reste", stock[index], index, "en stock")

if index == "prunes" :
    print("zoubida")
else :
    print("les autres fruits sont bon aussi")