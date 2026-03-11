/* Person class */
class Person {
  constructor(public readonly name: string) {}

  /* Private methods to generate public and protected properties */
  private generateUserId = (): number => {
    return Math.floor(Math.random() * 10000);
  };
  private generateUserName = (): string => {
    const [firstName, lastName] = this.name.split(" ");
    return `${firstName.charAt(0).toLowerCase()}.${lastName.toLowerCase()}`;
  };
  private generatePassword = (): string => {
    return Math.random().toString(36).slice(-10);
  };

  /* Public and protected properties */
  public readonly userId: number = this.generateUserId();
  protected readonly userName: string = this.generateUserName();
  public readonly email: string = `${this.userName}@school.edu`;
  protected readonly password: string = this.generatePassword();
  public hasAccessToStaffLounge = false; // set to false by default, set to true in Staff classes
}