class IsPalindrome{
    static boolean IsPalindrome(int x){
        String xToString = String.valueOf(x);
        String xToStringReversed = "";

        for(int i = xToString.length() - 1; i >= 0; i-- ){
            xToStringReversed += xToString.charAt(i);
        }

        if(xToString.equals(xToStringReversed)){
            return true;
        }
        return false;
    }
    public static void main(String[] args) {
        System.out.println(IsPalindrome(123));
    }
}