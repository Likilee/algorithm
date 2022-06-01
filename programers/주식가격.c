// Sol1. 배열 앞에서부터 순회하며 같은 크기 배열을 만들어두고, 하나씩 shift
// 하면서 각 시점에 대한 값을 업데이트

#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

typedef struct s_Price {
	int price;
	int time;
} Price;

typedef struct s_Stack {
    size_t maxElementCount;
    size_t currentElementCount;
    Price *array;
} Stack;

Stack *createStack(int maxElementCount) {
    Stack *stack = (Stack *)calloc(1, sizeof(Stack));
    stack->array = (Price *)calloc(maxElementCount, sizeof(Price));
		stack->maxElementCount = maxElementCount;
		return stack;
}

void pushStack(Stack *stack, Price element) {
	if (stack->currentElementCount == stack->maxElementCount)
		return ;
	stack->array[stack->currentElementCount] = element;
	++stack->currentElementCount;
}

Price popStack(Stack *stack) {
	--stack->currentElementCount;
	return stack->array[stack->currentElementCount];
}

Price peekStack(Stack *stack) {
	return stack->array[stack->currentElementCount - 1];
}

int getElementCount(Stack *stack) {
	return stack->currentElementCount;
}

bool isEmpty(Stack *stack) {
	return getElementCount(stack) == 0;
}

int *solution(int prices[], size_t prices_len) {
    int *answer = (int *)calloc(prices_len, sizeof(int));
		Stack *stack = createStack(prices_len);
		Price currentPrice = {0,0};
		Price popedPrice = {0,0};
		size_t time = 0;

    while (time < prices_len) {
			currentPrice.price = prices[time];
			currentPrice.time = time;

			while (!isEmpty(stack) && currentPrice.price < peekStack(stack).price) {
				popedPrice = popStack(stack);
				answer[popedPrice.time] = time - popedPrice.time;
			}
			pushStack(stack, currentPrice);
			++time;
    }
		while(getElementCount(stack) != 0) {
			popedPrice = popStack(stack);
				answer[popedPrice.time] = time - popedPrice.time - 1;
		}
		free(stack);
    return answer;
}

int main() {}