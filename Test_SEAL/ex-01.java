// Viết chương trình đệ quy tính tổng các số từ 1 đến n, với n là một số cho trước. 

import java.util.Scanner;

public class TinhTong {

    public static int tinhTong(int n) {
        if (n == 1) {
            return 1;
        } else {
            return n + tinhTong(n - 1);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Nhập số n: ");
        int n = scanner.nextInt();
        scanner.close();

        int tong = tinhTong(n);
        System.out.println("Tổng các số từ 1 đến " + n + " là: " + tong);
    }
}