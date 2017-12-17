import { Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { Dataset } from "./Dataset";

@Injectable()
export class DatasetService {

    constructor(
        private http: Http
    ){}

    getUrl(pageNumber:number, countOnPage:number): string{
        var dataUrl = '/api/data/:pageNumber/:countOnPage';
        return dataUrl.replace(":pageNumber", ""+pageNumber).replace(":countOnPage", ""+countOnPage);
    }

    getDatabyPage(pageNumber:number, countOnPage:number): Promise<Dataset[]> {

        return new Promise<Dataset[]>((resolve)=>{
            setTimeout(()=>{
                resolve([ { name: '0026aa70-cc6d-4f6f-8c2f-554a2f9b17f2',
                contact_email: 'michail.vousdoukas@ec.europa.eu',
                contact_name: 'European Commission, Joint Research Centre (JRC)',
                title: 'European Extreme Storm Surge level - Historical',
                description: 'The dataset contains the extreme storm surge levels (ESSL) at a European scale. The ESSL are estimated from an ensemble of 8 climatic models for the period from 1/12/1969 to 30/11/2004 and for 8 return periods (5, 10, 20, 50, 100, 200, 500, 1000) according to the Peak Over Threshold approach.\n\nFor further information regarding this dataset, the users are referred to the following article\nVousdoukas, M.I., Voukouvalas, E., Annunziato, A., Giardino, A., Feyen, L., 2016. Projections of extreme storm surge levels along Europe. Clim. Dyn. in press. DOI: 10.1007/s00382-016-3019-5',
                modified_date: '2017-11-14T17:23:19.546175',
                license_id: 'http://data.europa.eu/euodp/kos/licence/EuropeanCommission',
                license_title: 'Legal Notice',
                license_url: 'http://ec.europa.eu/geninfo/legal_notices_en.htm',
                url: 'http://data.europa.eu/89h/0026aa70-cc6d-4f6f-8c2f-554a2f9b17f2',
                id: '0026aa70-cc6d-4f6f-8c2f-554a2f9b17f2' },
              { name: '00a87831-3a64-4a08-a681-3929aeca1876',
                contact_email: 'jrc-ems-rapidmapping@ec.europa.eu',
                contact_name: 'European Commission, Joint Research Centre (JRC)',
                title: 'Agriculture Assessment in the Gaza Strip (2014-09-18)',
                description: '<br/> \nActivation time (UTC): 2014-09-18 18:53:00<br/> \nEvent time (UTC): 2014-07-08 00:00:00<br/> \nEvent type: Other<br/> \n<br/> \nActivation reason: <br/> \nThe scope of this activation is the damage assessment of agricultural facilities and fields after the armed conflict in the Gaza strip.<br/> \n<br/> \nReference maps produced: 0<br/> \nDelineation maps produced: 0<br/> \nGrading maps produced: 18<br/> \n<br/> \nCopernicus Emergency Management Service - Mapping is a service funded by European Commission aimed at providing actors in the management of natural and man-made disasters, in particular Civil Protection Authorities and Humanitarian Aid actors, with mapping products based on satellite imagery.<br/>',
                modified_date: '2017-11-14T17:58:29.700436',
                license_id: 'http://data.europa.eu/euodp/kos/licence/EuropeanCommission',
                license_title: 'Legal Notice',
                license_url: 'http://ec.europa.eu/geninfo/legal_notices_en.htm',
                url: 'http://data.europa.eu/89h/00a87831-3a64-4a08-a681-3929aeca1876',
                id: '00a87831-3a64-4a08-a681-3929aeca1876' },
              { name: '00nlSr3zHd3S6PiCskoXg',
                contact_email: null,
                contact_name: 'Eurostat, the statistical office of the European Union',
                title: 'Peach trees by density classes (area in ha)',
                description: 'Peach trees by density classes (area in ha)',
                modified_date: '2017-12-15T07:58:24.623028',
                license_id: 'http://data.europa.eu/euodp/kos/licence/EuropeanCommission',
                license_title: 'Legal Notice',
                license_url: 'http://ec.europa.eu/geninfo/legal_notices_en.htm',
                url: 'http://ec.europa.eu/eurostat/web/products-datasets/-/orch_peach2',
                id: '00nlSr3zHd3S6PiCskoXg' },
              { name: '01009127-5ddf-4f69-8a6b-30e6218f17bb',
                contact_email: 'jrc-fise-info@ec.europa.eu',
                contact_name: 'European Commission, Joint Research Centre (JRC)',
                title: 'Maximum habitat suitability map of Acer campestre (2006, FISE, RDS-MHSv0-3-2)',
                description: 'This dataset series shows the Maximum Habitat Suitability (MHS, also known as survivability) map of Acer campestre (raster format: geotiff). The survivability map is provided for Europe (EU28 plus part of other countries within the spatial extent), computed using the FISE harmonised European dataset of taxa presence/absence (based on the integration and harmonisation of the datasets by European National Forestry Inventories; BioSoil; Forest Focus/Monitoring; EUFGIS; GeneticDiversity). The survivability is estimated as the maximum extension of habitat suitability by means of statistical multivariate similarity analysis (Relative Distance Similarity, RDS) of the bio-climatic conditions where the taxon is observed in Europe (RDS Maximum Habitat Suitability, RDS-MHS). Available years: 2006. The maps are available in the Forest Information System for Europe (FISE). FISE is run by the European Commission, Joint Research Centre. See the field Lineage for further information.\n\n\nWhen using these data, please cite the relevant data sources. A suggested citation is included in the following:      \n\n- Various authors, 2016. Acer campestre in Europe: an outline on distribution, habitat, importance and threats. In: Online European Atlas of Forest Tree Species. FISE Comm. Publications Office of the European Union. pp. e012c65+. (Under review: please, check the current status at: https://w3id.org/mtv/FISE-Comm/v01/e012c65)      \n\n- de Rigo, D., Caudullo, G., Houston Durrant, T., San-Miguel-Ayanz, J., 2016. The European Atlas of Forest Tree Species: modelling, data and information on forest tree species. In: San-Miguel-Ayanz, J., de Rigo, D., Caudullo, G., Houston Durrant, T., Mauri, A. (Eds.), European Atlas of Forest Tree Species. Publ. Off. EU, Luxembourg, pp. e01aa69+. https://w3id.org/mtv/FISE-Comm/v01/e01aa69      \n\n-',
                modified_date: '2017-11-14T17:24:14.957859',
                license_id: 'http://data.europa.eu/euodp/kos/licence/EuropeanCommission',
                license_title: 'Legal Notice',
                license_url: 'http://ec.europa.eu/geninfo/legal_notices_en.htm',
                url: 'http://data.europa.eu/89h/01009127-5ddf-4f69-8a6b-30e6218f17bb',
                id: '01009127-5ddf-4f69-8a6b-30e6218f17bb' },
              { name: '00yyo0vinq079ZH4FcOqw',
                contact_email: null,
                contact_name: 'Eurostat, the statistical office of the European Union',
                title: 'EU co-patenting at the EPO according to applicants\'/inventors\' country of residence by international patent classification (IPC) sections - % in the total of all EU patents',
                description: 'EU co-patenting at the EPO according to applicants\'/inventors\' country of residence by international patent classification (IPC) sections - % in the total of all EU patents',
                modified_date: '2017-12-15T07:57:12.328855',
                license_id: 'http://data.europa.eu/euodp/kos/licence/EuropeanCommission',
                license_title: 'Legal Notice',
                license_url: 'http://ec.europa.eu/geninfo/legal_notices_en.htm',
                url: 'http://ec.europa.eu/eurostat/web/products-datasets/-/pat_ep_ipcpc',
                id: '00yyo0vinq079ZH4FcOqw' },
              { name: '014HVGAGnu32p17RrVj5KQ',
                contact_email: null,
                contact_name: 'Eurostat, the statistical office of the European Union',
                title: 'Gross weight of goods transported to/from main ports - Croatia - quarterly data',
                description: 'Gross weight of goods transported to/from main ports - Croatia - quarterly data',
                modified_date: '2017-12-15T10:16:45.562494',
                license_id: 'http://data.europa.eu/euodp/kos/licence/EuropeanCommission',
                license_title: 'Legal Notice',
                license_url: 'http://ec.europa.eu/geninfo/legal_notices_en.htm',
                url: 'http://ec.europa.eu/eurostat/web/products-datasets/-/mar_go_qm_hr',
                id: '014HVGAGnu32p17RrVj5KQ' },
              { name: '014be465-c941-4ad0-9817-b4de72e19773',
                contact_email: 'jrc-emis@ec.europa.eu',
                contact_name: 'European Commission, Joint Research Centre (JRC)',
                title: 'GMIS - MERIS Monthly climatology sea surface diffuse attenuation coefficient at 490nm (9km) in m^-1',
                description: 'Water Transparency (Diffuse attenuation coefficient at 490nm, Kd490 in m^-1 at 9km resolution): The diffuse attenuation coefficient Kd490 measures the light penetration in the water column at the blue-green wavelengths (ca. 490 nm). It represents a good indicator of water transparency resulting from the combined action of absorption and backscattering by the water constituents, and the structure of the surrounding light field.',
                modified_date: '2017-11-14T17:41:26.661066',
                license_id: 'http://data.europa.eu/euodp/kos/licence/EuropeanCommission',
                license_title: 'Legal Notice',
                license_url: 'http://ec.europa.eu/geninfo/legal_notices_en.htm',
                url: 'http://data.europa.eu/89h/014be465-c941-4ad0-9817-b4de72e19773',
                id: '014be465-c941-4ad0-9817-b4de72e19773' },
              { name: '01d65c42-ec7b-4716-ad01-997db0776f1e',
                contact_email: 'jrc-ems-rapidmapping@ec.europa.eu',
                contact_name: 'European Commission, Joint Research Centre (JRC)',
                title: 'Landslides in Serbia (2014-06-17)',
                description: '<br/> \nActivation time (UTC): 2014-06-17 15:44:00<br/> \nEvent time (UTC): 2014-05-19 00:00:00<br/> \nEvent type: Other<br/> \n<br/> \nActivation reason: <br/> \nAfter the large flood event in Serbia in May 2014,numerous landslides occured in the municipalities of Krupanje and Loznica.<br/> \n<br/> \nReference maps produced: 3<br/> \nDelineation maps produced: 3<br/> \nGrading maps produced: 0<br/> \n<br/> \nCopernicus Emergency Management Service - Mapping is a service funded by European Commission aimed at providing actors in the management of natural and man-made disasters, in particular Civil Protection Authorities and Humanitarian Aid actors, with mapping products based on satellite imagery.<br/>',
                modified_date: '2017-11-14T17:57:22.878903',
                license_id: 'http://data.europa.eu/euodp/kos/licence/EuropeanCommission',
                license_title: 'Legal Notice',
                license_url: 'http://ec.europa.eu/geninfo/legal_notices_en.htm',
                url: 'http://data.europa.eu/89h/01d65c42-ec7b-4716-ad01-997db0776f1e',
                id: '01d65c42-ec7b-4716-ad01-997db0776f1e' },
              { name: '01Al806on2wfDK73I3Zt4Q',
                contact_email: null,
                contact_name: 'Eurostat, the statistical office of the European Union',
                title: 'Gross weight of goods transported to/from main ports - Spain - annual data (2000-2005)',
                description: 'Gross weight of goods transported to/from main ports - Spain - annual data (2000-2005)',
                modified_date: '2017-12-15T09:36:11.490518',
                license_id: 'http://data.europa.eu/euodp/kos/licence/EuropeanCommission',
                license_title: 'Legal Notice',
                license_url: 'http://ec.europa.eu/geninfo/legal_notices_en.htm',
                url: 'http://ec.europa.eu/eurostat/web/products-datasets/-/mar_go_qm_es05',
                id: '01Al806on2wfDK73I3Zt4Q' },
              { name: '01gR6AIEivlA5S11A3MCA',
                contact_email: null,
                contact_name: 'Eurostat, the statistical office of the European Union',
                title: 'Temporary employees by sex, age and economic activity (1998-2008, NACE Rev. 1.1) - 1 000',
                description: 'Temporary employees by sex, age and economic activity (1998-2008, NACE Rev. 1.1) - 1 000',
                modified_date: '2017-12-15T08:05:08.311697',
                license_id: 'http://data.europa.eu/euodp/kos/licence/EuropeanCommission',
                license_title: 'Legal Notice',
                license_url: 'http://ec.europa.eu/geninfo/legal_notices_en.htm',
                url: 'http://ec.europa.eu/eurostat/web/products-datasets/-/lfsq_etgana',
                id: '01gR6AIEivlA5S11A3MCA' } ]);
            }, 200);
        });
     /*    
        return new Promise<Dataset[]>(resolve => {
             this.http.get(this.getUrl(pageNumber, countOnPage))
                 .toPromise()
                 .then((resp) => {
                    var datasets: Dataset[] = resp.json() as Dataset[];
                    resolve(datasets);
                 });
         });
         */
     }
       
}