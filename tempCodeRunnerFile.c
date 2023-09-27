#include <stdio.h>

// Function to find the modulo multiplicative inverse of A (mod C)
int findMultiplicativeInverse(int A, int C) {
    for (int X = 1; X < C; X++) {
        if (((A % C) * (X % C)) % C == 1) {
            return X;
        }
    }
    return -1; // If no inverse is found, return -1
}

int main() {
   int A, C;

   // Input A
   printf("Enter A: ");
   scanf("%d", &A);

   // Input C
   printf("Enter C: ");
   scanf("%d", &C);

   // Calculate the modulo multiplicative inverse
   int result = findMultiplicativeInverse(A, C);

   // Display the result
   if (result == -1) {
       printf("No multiplicative inverse exists for %d (mod %d).\n", A, C);
   } else {
       printf("The Modulo Multiplicative Inverse of %d (mod %d) is: %d\n", A, C, result);
   }

   return 0;
}
