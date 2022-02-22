import Foundation
import Capacitor
import FBSDKCoreKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(FacebookAnalyticsPlugin)
public class FacebookAnalyticsPlugin: CAPPlugin {
    
    @objc func initAppEvents(_ call: CAPPluginCall) {
        AppEvents.shared.activateApp()
        call.resolve()
    }
    
    @objc func logEvent(_ call: CAPPluginCall) {
        guard let event = call.getString("event") else {
            call.reject("Missing event argument")
            return;
        }

        print(event)

        if let valueToSum = call.getDouble("valueToSum") {
            if let params = call.getString("params") {
                print(params)
                let newParams = [
                    AppEvents.ParameterName.content : params,
                ]
                AppEvents.shared.logEvent(.init(event), valueToSum: valueToSum, parameters: newParams)
            } else {
                AppEvents.shared.logEvent(.init(event), valueToSum: valueToSum)
            }
        } else {
            if let params = call.getString("params") {
                print(params)
                let newParams = [
                    AppEvents.ParameterName.content : params,
                ]
                AppEvents.shared.logEvent(.init(event), parameters: newParams)
            } else {
                AppEvents.shared.logEvent(.init(event))
            }
        }
        call.resolve()
    }

}
