#include <stdio.h>

//int sizeof_demo ()
int main()
{
	float r,c,s;
	printf("Ban kinh cua hinh tron la r= ");
	scanf("%f",&r);
	c=6.28*r; //2*pi*r
	s=3.14*r*r; //pi*r binh phuong
	printf("\n");
	printf("Ket qua tinh chu vi và dien tich hinh tron: \n");
	printf("===== \n");
	printf(".Ban kinh hinh tron         r=%8.1 met \n",r);
	printf(" Chu vi hinh tron           c=%8.2 met \n,r");
	printf(" Dien tich hinh tron:       s=%8.2f met vuong \n",s);
	printf("===========                                  \n\n");
//======== vi du 2=====
    printf("Data type      \t | Sizeo of byte \n");
    printf("int            \t | %d byte \n",sizeof(int));
    printf("float          \t | %d byte \n",sizeof(float));
    printf("unsigned int   \t | %d byte \n",sizeof(unsigned int));
    printf("short int      \t | %d byte \n",sizeof(short int));
    printf("long int       \t | %d byte \n",sizeof(long int));
    printf("double         \t | %d byte \n",sizeof(double));
    
return 1;
}

