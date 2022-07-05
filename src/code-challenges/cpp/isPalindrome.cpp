#include <iostream>

using namespace std;

bool isPalindrome(int x) {
  string xToString = to_string(x);
  string xToStringReversed;
  int xToStringLength = xToString.length();
  for(int i = xToStringLength-1; i >= 0;i--){
    xToStringReversed += xToString.at(i);
  }
  if(xToString == xToStringReversed){
    return true;
  }
  return false; 
}

int main() {
//   isPalindrome(121);
  cout << isPalindrome(-121) << endl;
}