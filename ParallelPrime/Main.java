import java.util.ArrayList;


public class Main {
  static final int soLuongSoNguyenTo = Integer.MAX_VALUE;
  static final int soLuongCPU = Runtime.getRuntime().availableProcessors();
  static final int kichThuocMang = 100000;
  static ArrayList<Integer> primes = new ArrayList<Integer>(kichThuocMang);

  public static void main(String[] args) throws Exception {
    System.out.println("Tổng số luồng của cpu máy tính của bạn " + soLuongCPU);
    Thread[] luongCPU = new Thread[soLuongCPU];
    hamTimSoNguyenTo.thucThiChuongTrinh = new NguoiGiamSat();

    for (int i = 0; i < soLuongCPU; i++) {
      luongCPU[i] = new Thread(new hamTimSoNguyenTo(i));
      luongCPU[i].start();
    } 

    // Chờ đợi tất cả các luồng đều hoàn tất
    for (int i = 0; i < soLuongCPU; i++)
      luongCPU[i].join();

    // In ra tất cả số nguyên tốt
    for (int n : primes)
      System.out.print("" + n + " ");
    System.out.println();
  }

  public static boolean hamKiemTraNguyenTo(int n) {
    if (n == 2 || n == 3 || n == 5)
      return true;
    if (n <= 1 || (n & 1) == 0)
      return false;

    for (int i = 3; i * i <= n; i += 2)
      if (n % i == 0)
        return false;

    return true;
  }

  public synchronized static void themSoNguyenTo(int n) {
    primes.add(n);
  }
}

class hamTimSoNguyenTo implements Runnable {
  public static NguoiGiamSat thucThiChuongTrinh;
  final int ID;

  public hamTimSoNguyenTo(int i) {
    ID = i;
  }

  public void run() {
    for (int i = 0; i < Main.soLuongSoNguyenTo; i++) {
      if (i % Main.soLuongCPU == ID)
        if (Main.hamKiemTraNguyenTo(i))
          thucThiChuongTrinh.themSoNguyenTo(i);
    }
  }
}

class NguoiGiamSat {
  public synchronized void themSoNguyenTo(int n) {
    Main.themSoNguyenTo(n);
  }
}
