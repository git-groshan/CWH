// ###########  Key Finding During XNHO-CHO  ###############
#include<bits/stdc++.h>
namespace gnb
{


// This structure is used to store cho cell related info
typedef struct gnb_cho_cell_related_info
{
    gnb::nr_pci_t neighbour_pci;
    gnb::nr_arfcn_t ssb_frequency;
    gnb::ssb_sub_carrier_spacing ssb_sub_carrier_spacing;
    gnb::meas_result meas_result;

    /* paramters to be used in case of XN-HO */
    gnb::plmn_id plmn_id;
    gnb::tac_t tac;
    uint32_t reloc_prep_timer;
    uint32_t reloc_overall_timer;
    // gnb::ue_ng_ran_history_info_t  ue_ng_ran_history_info;
    bool direct_forwarding_path_availability;
    gnb::hand_over_freq_type hand_over_freq_type;

    void reset()
    {
        neighbour_pci = 0;
        ssb_frequency = 0;
        meas_result.reset();
        reloc_prep_timer = 0;
        reloc_overall_timer = 0;
        direct_forwarding_path_availability = false;
        hand_over_freq_type = gnb::hand_over_freq_type::INTRA_FREQUENCY;
        plmn_id = {};
        tac = 0;
        // ue_ng_ran_history_info.reset();
    }

    gnb_cho_cell_related_info()
    {
        reset();
    }

} gnb_cho_cell_related_info_t;

/* This below list is created at UE_CONN after receving candidate cell info list for CHO */
//-----------> It has all CHO capable and cho Cell related information
struct cho_capable_cells_info_t
{
    struct
    {
        uint32_t cell_group_config : 1;
        uint32_t target_crnti : 1;
        uint32_t full_config : 1;
        uint32_t temp_xnap_ue_id : 1; // inter-gNB case
        uint32_t short_mac_i_present; // inter-gNB case
    } presence;

    gnb::gnb_cho_cell_related_info_t cell_info;
    gnb::asn_msg cell_group_config;
    gnb::crnti_t target_crnti;
    bool full_config;
    std::map<gnb::drb_id_t, gnb::gtp_tunnel_endpoint> dl_tunnel_list_t;
    gnb::xnap_ue_id_t temp_xnap_ue_id;          // inter-gNB case
    gnb::short_mac_i_t target_cell_short_mac_i; // inter-gNB case
    bool is_rrc_reconfig_asn_encoded;
    gnb::asn_msg rrc_reconfiguration_ptr;

    void reset()
    {
        if (rrc_reconfiguration_ptr.ptr != nullptr &&
            rrc_reconfiguration_ptr.len != 0 &&
            is_rrc_reconfig_asn_encoded == true)
        {
            NGP_FREE_WRAPPER(rrc_reconfiguration_ptr.ptr);
            rrc_reconfiguration_ptr.ptr = nullptr;
            rrc_reconfiguration_ptr.len = 0;
        }

        if (cell_group_config.ptr != nullptr &&
            cell_group_config.len != 0 &&
            1 == presence.cell_group_config)
        {
            NGP_FREE_WRAPPER(cell_group_config.ptr);
            cell_group_config.ptr = nullptr;
            cell_group_config.len = 0;
        }

        presence.cell_group_config = 0;
        presence.target_crnti = 0;
        full_config = false;
        dl_tunnel_list_t.clear();
        temp_xnap_ue_id = 0;
        presence.temp_xnap_ue_id = 0;
        is_rrc_reconfig_asn_encoded = false;

        cell_info.reset();
    }

    cho_capable_cells_info_t()
    {
        reset();
    }
}; // end of cho_capable_cells_info_t structure

// map of nr_cgi vs gnb_cho_cell_related_info_t  --> gnb_cho_candidate_cell_id_list_t
// It stores all cho candidate information
typedef std::map<gnb::nr_cgi, gnb::gnb_cho_cell_related_info_t> gnb_cho_candidate_cell_id_list_t;

// structure to store the ALL interDu cho candidate cells info of Specific DU 
struct cho_inter_du_candidate_cell_info_t
{
    gnb::gnb_assoc_id assoc_id;
    gnb::gnb_cho_candidate_cell_id_list_t cell_id_list; // map of nr_cgi vs gnb_cho_cell_related_info_t
};

// map of duId vs cho_inter_du_candidate_cell_info_t which is use to store 
// all inter du candidated mapped using respective duId 
typedef std::map<gnb::gnb_du_id_t, gnb::cho_inter_du_candidate_cell_info_t> gnb_cho_interdu_cell_id_list_t;

// map of nr_cgi vs cho_capable_cells_info_t
typedef std::map<gnb::nr_cgi, gnb::cho_capable_cells_info_t> gnb_cho_capable_cells_list_t;

// structure to store info of IntergNB Cho Candidate cell
struct cho_capable_inter_gnb_cell_info_t
{
    gnb::gnb_assoc_id target_xn_assoc_id;
    gnb::gnb_cho_interDu_action_type_t action_type;
    gnb::gnb_cho_capable_cells_list_t cells_list_t; // map of nr_cgi vs cho_capable_cells_info_t structure
};

/* Inter gNB list */
// map of gnb_id vs cho_capable_inter_gnb_cell_info_t structure
typedef std::map<gnb::gnb_id, gnb::cho_capable_inter_gnb_cell_info_t> inter_gnb_cells_list_t;

struct gnb_cho_candidate_cells_info_t
{
    /* Intra DU Cell Info List */
    gnb::gnb_cho_candidate_cell_id_list_t intra_du_cell_info_list; // map of nr_cgi vs gnb_cho_cell_related_info_t

    /* Inter DU Cell Info List */
    gnb::gnb_cho_interdu_cell_id_list_t inter_du_cell_info_list;// map of duId vs cho_inter_du_candidate_cell_info_t which is use to store all inter du candidated mapped using respective duId 

    /* Inter gNB Cell Info List */
    gnb::inter_gnb_cells_list_t inter_gnb_cells_info_list;//map of gnb_id vs cho_capable_inter_gnb_cell_info_t structure
};

struct cho_capable_inter_du_cell_info_t
{
    struct
    {
        uint32_t gnb_du_ue_f1ap_id : 1;
    } presence;

    gnb::gnb_assoc_id assoc_id;
    f1ap::gnb_du_ue_f1ap_id_t gnb_du_ue_f1ap_id;
    gnb::gnb_cho_interDu_action_type_t action_type;
    gnb::gnb_cho_capable_cells_list_t cells_list_t;// map of nr_cgi vs cho_capable_cells_info_t structure
};

/* intra gNB list */
typedef std::map<gnb::gnb_du_id_t, gnb::cho_capable_inter_du_cell_info_t> inter_du_cells_list_t;

typedef struct gnb_reported_candidate_cells_info
{
    /* Intra DU Cell Info List */
    gnb::inter_du_cells_list_t intra_du_cells_info;

    /* Inter DU Cell Info List */
    gnb::inter_du_cells_list_t inter_du_cells_info;

    /* Inter gNB Cell Info List */
    gnb::inter_gnb_cells_list_t inter_gnb_cells_info;

    void reset()
    {
        for (auto du_itr = intra_du_cells_info.begin(); du_itr != intra_du_cells_info.end();)
        {
            // gnb::gnb_cho_capable_cells_list_t& cho_capable_cells = du_itr->second;
            gnb::cho_capable_inter_du_cell_info_t &intra_du_cell_info =
                du_itr->second;

            intra_du_cell_info.presence.gnb_du_ue_f1ap_id = 0;

            for (auto cell_itr = intra_du_cell_info.cells_list_t.begin(); cell_itr != intra_du_cell_info.cells_list_t.end();)
            {
                gnb::cho_capable_cells_info_t &cells_info = cell_itr->second;
                cells_info.reset();

                // Erase the current cell and update the iterator
                cell_itr = intra_du_cell_info.cells_list_t.erase(cell_itr);
            }

            if (intra_du_cell_info.cells_list_t.empty())
            {
                du_itr = intra_du_cells_info.erase(du_itr);
            }
            else
            {
                du_itr++;
            }
        }

        for (auto du_itr = inter_du_cells_info.begin(); du_itr != inter_du_cells_info.end();)
        {
            gnb::cho_capable_inter_du_cell_info_t &inter_du_cell_info =
                du_itr->second;

            inter_du_cell_info.presence.gnb_du_ue_f1ap_id = 0;

            inter_du_cell_info.action_type = gnb::gnb_cho_interDu_action_type_t::CHO_INVALID_ACTION;
            for (auto cell_itr = inter_du_cell_info.cells_list_t.begin(); cell_itr != inter_du_cell_info.cells_list_t.end();)
            {
                gnb::cho_capable_cells_info_t &cell_info = cell_itr->second;
                cell_info.reset();

                // Erase the current cell and update the iterator
                cell_itr = inter_du_cell_info.cells_list_t.erase(cell_itr);
            }

            if (inter_du_cell_info.cells_list_t.empty())
            {
                du_itr = inter_du_cells_info.erase(du_itr);
            }
            else
            {
                du_itr++;
            }
        }

        /* inter-gNB case */
        for (auto gnb_itr = inter_gnb_cells_info.begin(); gnb_itr != inter_gnb_cells_info.end();)
        {
            gnb::cho_capable_inter_gnb_cell_info_t &inter_gnb_cell_info =
                gnb_itr->second;

            for (auto cell_itr = inter_gnb_cell_info.cells_list_t.begin(); cell_itr != inter_gnb_cell_info.cells_list_t.end();)
            {
                gnb::cho_capable_cells_info_t &cell_info = cell_itr->second;
                cell_info.reset();

                // Erase the current cell and update the iterator
                cell_itr = inter_gnb_cell_info.cells_list_t.erase(cell_itr);
            }

            if (inter_gnb_cell_info.cells_list_t.empty())
            {
                gnb_itr = inter_gnb_cells_info.erase(gnb_itr);
            }
            else
            {
                gnb_itr++;
            }
        }
    }
} gnb_reported_candidate_cells_info_t;

typedef struct ongoing_cho_cell_info
{
    gnb::nr_cgi nbr_nr_cgi;
    gnb::gnb_du_id_t du_id;
    gnb::gnb_assoc_id assoc_id;
    gnb::nr_arfcn_t nbr_dl_nr_arfcn;
    gnb::gnb_req_type_t req_type;
    gnb::gnb_id nbr_gnb_id;
} ongoing_cho_cell_info_t;

typedef std::map<std::pair<gnb::xnap_ue_id_t, gnb::gnb_assoc_id>, gnb::gnb_ue_id_t> cho_xn_ue_id_list_t;

}
