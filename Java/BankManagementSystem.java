abstract class BankAccount {

    private String accountNumber;
    private String accountHolderName;
    private double balance;

    public BankAccount(String accountNumber,
            String accountHolderName,
            double balance) {

        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public void deposit(double amount) {

        if (amount > 0) {
            balance += amount;
            System.out.println(amount + " deposited successfully.");
        } else {
            System.out.println("Invalid amount.");
        }
    }

    public void displayDetails() {

        System.out.println("Account Number : " + accountNumber);
        System.out.println("Account Holder : " + accountHolderName);
        System.out.println("Balance        : " + balance);
    }

    abstract double calculateInterest();
}

class SavingsAccount extends BankAccount {
    private double interestRate = 5.0;

    public SavingsAccount(String accountNumber,
            String accountHolderName,
            double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    double calculateInterest() {

        return (getBalance() * interestRate) / 100;
    }
}

class CurrentAccount extends BankAccount {
    private double interestRate = 2.0;

    public CurrentAccount(String accountNumber,
            String accountHolderName,
            double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    double calculateInterest() {

        return (getBalance() * interestRate) / 100;
    }
}

public class BankManagementSystem {

    public static void main(String[] args) {
        SavingsAccount sa = new SavingsAccount(
                "2500221125",
                "Rahul Sharma",
                10000);
        sa.deposit(5000);
        System.out.println("\n===== Savings Account =====");
        sa.displayDetails();
        System.out.println("Interest : " +
                sa.calculateInterest());

        CurrentAccount ca = new CurrentAccount(
                "2500221126",
                "Ajay Verma",
                200000);

        ca.deposit(3000);

        System.out.println("\n===== Current Account =====");
        ca.displayDetails();

        System.out.println("Interest : " +
                ca.calculateInterest());
    }
}