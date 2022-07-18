#include <algorithm>
#include <chrono>
#include <iostream>
#include<vector>
#include <cstdio>
using namespace std;
using namespace std::chrono;

__global__ void cuda_hello(){
    printf("Hello World from GPU!\n");
}

int main() {
    for (int i=0; i<999;i++)
    {
        cuda_hello<<<1,256>>>();
    }
    return 0;
}
