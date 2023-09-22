#include <stdio.h>

int sum(int a, int b);
int substrac(int a, int b);
int arry (int a, int b);
int division(int a, int b);

int main() {
	int c, d;
	printf("enter number 1: ");
	scanf("%d", &c);
	printf("enter number 2: ");
	scanf("%d", &d);
	int result1 = sum(c, d);
	int result2 = substrac(c, d);
	int result3 = arry(c, d);
	int result4 = division(c, d);
	
	printf("result of sum is: %d\n", result1);
	printf("result of substrac is: %d\n", result2);
	printf("result of arry is: %d\n", result3);
	printf("result of division: %d\n", result4);
	
	
}
  int sum (int a, int b){
  	int c;
  	c = (a + b);
  	return c;
  }
  int substrac (int a, int b){
  	int e;
  	e = (a - b);
  	return e;
  }
  int arry (int a, int b){
  	int v;
  	v = (a * b);
  	return v;
  }
  int division (int a, int b){
  	int d;
  	d = (a / b);
  	return d;
  }
