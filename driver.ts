import "@/components/Driver/Driver.css"
import { driver, type DriveStep, type Driver } from "driver.js"
import "driver.js/dist/driver.css"

interface ILocalSteps {
    path: string,
    steps: DriveStep[]
}

export class DriverManager {
    private driver: Driver
    private globalSteps: DriveStep[] // for steps that are in all pages
    private localSteps: ILocalSteps[] // for steps for each page

    constructor(globalSteps: DriveStep[], localSteps: ILocalSteps[]) {
        this.globalSteps = globalSteps
        this.localSteps = localSteps
        this.driver = driver(
            {
                animate: true,
                showButtons: ["next", "previous"],
                popoverClass: "driverjs-theme",
            })
    }

    private determinateStepsForPage() {
        if (this.driver == null) {
            console.error('DriverManager found an error: driver is not defined')
            return
        }

        let stepsToShow = this.globalSteps
        const path = window.location.pathname

        const foundLocalSteps = this.localSteps.find(
            (localStep) => localStep.path.includes(path as string)
        )?.steps

        if (foundLocalSteps == null) {
            console.error(`DriverManager found an error: There are no steps for ${path}`)
        } else {
            stepsToShow = [...stepsToShow, ...foundLocalSteps]
        }

        console.log(stepsToShow)
        this.driver.setSteps(stepsToShow)
    }

    public async showSteps() {
        if (this.driver == null) {
            console.error('DriverManager found an error: driver is not defined')
            return
        }
        this.determinateStepsForPage()
        this.driver.drive()
    }
}
