#include <iostream>
#include <vector>

using namespace std;

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

class RomanInt{
    public:
        char letter;
        int value;
};

int romanToInt(string s) {
    int result;
    RomanInt romanLetterAndInt[7];
    romanLetterAndInt[0].letter = *"I";
    romanLetterAndInt[0].value = 1;

    romanLetterAndInt[1].letter = *"V";
    romanLetterAndInt[1].value = 5;

    romanLetterAndInt[2].letter = *"X";
    romanLetterAndInt[2].value = 10;

    romanLetterAndInt[3].letter = *"L";
    romanLetterAndInt[3].value = 50;

    romanLetterAndInt[4].letter = *"C";
    romanLetterAndInt[4].value = 100;

    romanLetterAndInt[5].letter = *"D";
    romanLetterAndInt[5].value = 500;

    romanLetterAndInt[6].letter = *"M";
    romanLetterAndInt[6].value = 1000;

    for(int i = 0; i < s.size(); i++){
        int romanObjLength = sizeof(romanLetterAndInt) / sizeof(romanLetterAndInt[0]);
        for(int j = 0; j < romanObjLength; j++){
            if(s[i] == romanLetterAndInt[j].letter){
                if(s[i+1]){
                    for(int k = 0; k < romanObjLength; k++){
                        if(s[i+1] == romanLetterAndInt[k].letter){
                            if(romanLetterAndInt[k].value > romanLetterAndInt[j].value){
                            result += romanLetterAndInt[k].value - romanLetterAndInt[j].value;

                            }else{

                            result +=  romanLetterAndInt[j].value;
                            }
                            i++;
                            continue;
                        }
                    }
                    i++;
                    continue;
                }
                result += romanLetterAndInt[j].value;
            }
        }
    }

    return result;
};

int main(){
    cout << romanToInt("IVX") << endl;
    return 0;
};