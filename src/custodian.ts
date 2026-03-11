/* Custodian class inherits from => Staff interhits from => Person */
class Custodian extends Staff {
  public hasBuildingKey = true; // Inherited from Staff where it was false, set it to true for Custodian
}