// min heap 을 활용하면 될듯

#include <algorithm>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

bool cmp(int a, int b) { return a > b; }

void changeToMinHeap(vector<int> &vector) {
    make_heap(vector.begin(), vector.end(), cmp);
}

void pop(vector<int> &heap) {
    pop_heap(heap.begin(), heap.end(), cmp);
    heap.pop_back();
}

int peek(vector<int> &heap) { return *(heap.begin()); }

void push(vector<int> &heap, int element) {
    heap.push_back(element);
    push_heap(heap.begin(), heap.end(), cmp);
}

void mix(vector<int> &heap) {
    int first, second;

    first = peek(heap);
    pop(heap);
    second = peek(heap);
    pop(heap);

    push(heap, first + (second * 2));
}

int solution(vector<int> scoville, int K) {
    int answer = 0;

    changeToMinHeap(scoville);
    while (scoville.size() > 1) {
        if (peek(scoville) >= K)
            return answer;
        else {
            ++answer;
            mix(scoville);
        }
    }
    if (peek(scoville) >= K)
        return answer;
    return -1;
}

// 모범 답안 ( cpp stl에 priority queue 가 존재하는지 몰랐다..)

#include <queue>

void mix2(priority_queue<int, vector<int>, greater<int> > &pq) {
    int first, second;

    first = pq.top();
    pq.pop();
    second = pq.top();
    pq.pop();

    pq.push(first + (second * 2));
}

int solution2(vector<int> scoville, int K) {
    int answer = 0;
    priority_queue<int, vector<int>, greater<int> > pq(scoville.begin(),
                                                      scoville.end());

    while (pq.top() < K) {
        if (pq.size() == 1)
            return -1;
        ++answer;
        mix2(pq);
    }
    return answer;
}

int main() {
    std::vector<int> vec1;
    std::vector<int> vec2;

    vec1.push_back(1);
    vec1.push_back(2);
    vec1.push_back(3);
    vec1.push_back(9);
    vec1.push_back(10);
    vec1.push_back(12);

    vec2.push_back(1);
    vec2.push_back(2);
    vec2.push_back(3);

    cout << solution2(vec1, 7) << endl;
    cout << solution2(vec2, 11) << endl;
}