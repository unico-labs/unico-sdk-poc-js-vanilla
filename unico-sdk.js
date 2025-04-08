import { UnicoCheckBuilder, SelfieCameraTypes, UnicoThemeBuilder, UnicoConfig, SDKEnvironmentTypes, DocumentCameraTypes } from './UnicoCheckBuilder.min.js'

var callback = {
    on: {
        success: function (obj) {

        // Realiza a requisição com os dados
        // da imagem para o endpoint (api2)
        createProcess(obj)
        },
        error: function (error) {
        //confira na aba "Configura��es" sobre os tipos de erros
        }
    }
};

const config = new UnicoConfig()

.setHostname("<YOUR_HOSTNAME>")

.setHostKey("YOUR_HOST_KEY>");

const unicoCameraBuilder = new UnicoCheckBuilder();
    unicoCameraBuilder.setResourceDirectory('/resources');
    unicoCameraBuilder.setModelsPath('/models');
    unicoCameraBuilder.setEnvironment(SDKEnvironmentTypes.UAT)


const unicoTheme = new UnicoThemeBuilder()
    .build();

unicoCameraBuilder.setTheme(unicoTheme);

const unicoCamera = unicoCameraBuilder.build();
const cameraPromised = unicoCamera.prepareSelfieCamera(config, SelfieCameraTypes.SMART);
    cameraPromised.then(cameraOpener => cameraOpener.open(callback))

function createProcess(unico)
{
    console.log(unico)
}