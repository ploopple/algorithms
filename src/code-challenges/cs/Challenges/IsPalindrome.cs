namespace IsPalindrome
{
    public class IsPalindromes
    {
        public bool TwoSum(int x)
        {
            string xToString = x.ToString();
            string xToStringRevesed = "";

            for(int i = xToString.Length - 1; i >= 0; i--)
            {
                xToStringRevesed += xToString[i];
            }

            if(xToString == xToStringRevesed)
            {
                return true;
            }

            return false;
        }

        public void Main()
        {
            Console.WriteLine(TwoSum(121));
        }
    }
}