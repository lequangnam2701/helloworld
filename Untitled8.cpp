//#include <stdio.h>
//
//int main() {
//	long long1 = 10;
//	printf("%d\n", long1);
//	
//	float float2 = 5.6;
//    printf("%f\n", float2);
//    
//     double double3 = 8.9;
//    printf("%lf\n", double3);
//	
//	char char4 = '5';
//	printf("%c\n", char4);
//	
//	char* char6 = "Hello World";
//	printf("%s\n", char6);
//	
//	return 0
#include<stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        // N?u n chia h?t cho i thì i chính là u?c c?a n
        if (n % i == 0) {
            printf("%d ", i);
        }
    }
    return 0;
}


